import boto3
import boto3.session
import json
import os

# os.environ['AWS_PROFILE'] = "Profile1"
awsAccessKeyId = os.environ.get('AWS_ACCESS_KEY_ID')
awsSecretAccessKey = os.environ.get('AWS_SECRET_ACCESS_KEY')

# Create SQS client
my_session = boto3.session.Session(
    aws_access_key_id=awsAccessKeyId, aws_secret_access_key=awsSecretAccessKey)
sqs = my_session.client('sqs', region_name='ap-southeast-1')
# New IOT Rule to push to dynamodb
iot = my_session.client('iot-data', region_name='ap-southeast-1')

queue_url = 'queue-url'  # TO BE CHANGED BASED ON QUEUE CREATED


def alert(message):
    print("ALERTTTTTTTTTTTTTTTTTTTTT!!!!!!!!!")
    data = json.dumps(message)
    print(data)
    # sample data: {"deviceId": "SBS09", "dateTime": "2022-03-19 00:20:37", "ward": "B1-3.2", "bed": "4", "Heart Rate": 94, "Blood Pressure": 93, "Oxygen Level": 96, "status": "good"}
    response = iot.publish(
        topic='/alert',
        payload=data
    )

# Receive message from SQS queue
# sample message:
# {"deviceId": "SBS09", "dateTime": "2022-03-19 00:11:59", "ward": "B1-3.2", "bed": "4", "Heart Rate": 61, "Blood Pressure": 112, "Oxygen Level": 98}


def delete_message(sqs, receipt_handle):
    response = sqs.delete_message_batch(
        QueueUrl=queue_url,
        Entries=receipt_handle,
    )
    print(response)

    # sqs.delete_message(
    #     QueueUrl=queue_url,
    #     ReceiptHandle=receipt_handle
    # )


def receive_message():
    response = sqs.receive_message(
        QueueUrl=queue_url,
        MaxNumberOfMessages=10,
        WaitTimeSeconds=20,
        VisibilityTimeout=120
    )

    print(f"Number of messages received: {len(response.get('Messages', []))}")

    messages = []
    for message in response.get("Messages", []):
        unhealthy = False
        message_dict = json.loads(message['Body'])
        print(type(message_dict))

        if message_dict['Heart Rate'] < 60 or message_dict['Heart Rate'] > 100:
            message_dict["Heart Rate Status"] = "unhealthy"
            unhealthy = True
        else:
            message_dict["Heart Rate Status"] = "healthy"

        if message_dict['Oxygen Level'] < 94:
            message_dict["Oxygen Level Status"] = "unhealthy"
            unhealthy = True
        else:
            message_dict["Oxygen Level Status"] = "healthy"

        if message_dict['Blood Pressure'] < 90 or message_dict['Blood Pressure'] > 140:
            message_dict["Blood Pressure Status"] = "unhealthy"
            unhealthy = True
        else:
            message_dict["Blood Pressure Status"] = "healthy"

        message_dict["Alert"] = unhealthy
        alert(message_dict)
        print("HeartRate:", message_dict['Heart Rate'], "Blood Pressure:",
              message_dict['Blood Pressure'], "Oxygen Level", message_dict['Oxygen Level'])

        print(message, message["ReceiptHandle"])

        messages.append(
            {"Id": message["MessageId"], "ReceiptHandle": message["ReceiptHandle"]})

        if len(messages) != 0:
            delete_message(sqs, messages)


while True:
    try:
        receive_message()
    except Exception as e:
        print(e)
        print("THERE IS AN ERROR")
    except:
        print("THERE IS AN ERROR")
