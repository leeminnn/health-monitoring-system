import boto3

dynamodb = boto3.resource('dynamodb',
                            aws_access_key_id='access-key-id',
                            aws_secret_access_key='secret-access-key',
                            aws_session_token="session-toke",
                            region_name='region')

table = dynamodb.Table('Cloud_Test')

with table.batch_writer() as batch:
    batch.put_item(Item={
      'deviceId': "SBS09", 
      'dateTime': "2022-03-19 00:20:37", 
      'ward': "B1-3.2", 
      'bed': "4", 
      'Heart_Rate': 94, 
      'Heart_Rate_Status': 'healthy',
      'Blood_Pressure': 93, 
      'Blood_Pressure_Status': 'healthy',
      'Oxygen_Level': 96 ,
      'Oxygen_Level_Status': 'healthy',
      'Alert': 'false'
    })
    batch.put_item(Item={
      'deviceId': "SBS10", 
      'dateTime': "2022-03-19 00:20:37", 
      'ward': "B1-3.2", 
      'bed': "5", 
      'Heart_Rate': 150, 
      'Heart_Rate_Status': 'unhealthy',
      'Blood_Pressure': 93, 
      'Blood_Pressure_Status': 'healthy',
      'Oxygen_Level': 30 ,
      'Oxygen_Level_Status': 'unhealthy',
      'Alert': 'true'
    })
    batch.put_item(Item={
      'deviceId': "SBS011", 
      'dateTime': "2022-03-19 00:20:37", 
      'ward': "B1-3.2", 
      'bed': "6", 
      'Heart_Rate': 93, 
      'Heart_Rate_Status': 'healthy',
      'Blood_Pressure': 77, 
      'Blood_Pressure_Status': 'healthy',
      'Oxygen_Level': 76 ,
      'Oxygen_Level_Status': 'healthy',
      'Alert': 'false'
    })
    batch.put_item(Item={
      'deviceId': "SBS012", 
      'dateTime': "2022-03-19 00:20:37", 
      'ward': "B1-3.2", 
      'bed': "7", 
      'Heart_Rate': 94, 
      'Heart_Rate_Status': 'healthy',
      'Blood_Pressure': 93, 
      'Blood_Pressure_Status': 'healthy',
      'Oxygen_Level': 96 ,
      'Oxygen_Level_Status': 'healthy',
      'Alert': 'false'
    })
    batch.put_item(Item={
      'deviceId': "SBS013", 
      'dateTime': "2022-03-19 00:20:37", 
      'ward': "B1-3.2", 
      'bed': "1", 
      'Heart_Rate': 115, 
      'Heart_Rate_Status': 'unhealthy',
      'Blood_Pressure': 93, 
      'Blood_Pressure_Status': 'healthy',
      'Oxygen_Level': 96 ,
      'Oxygen_Level_Status': 'healthy',
      'Alert': 'true'
    })
    batch.put_item(Item={
        'deviceId': "SBS14", 
        'dateTime': "2022-03-19 00:20:37", 
        'ward': "B1-3.2", 
        'bed': "2", 
        'Heart_Rate': 94, 
        'Heart_Rate_Status': 'healthy',
        'Blood_Pressure': 93, 
        'Blood_Pressure_Status': 'healthy',
        'Oxygen_Level': 96 ,
        'Oxygen_Level_Status': 'healthy',
        'Alert': 'false'
      })
    batch.put_item(Item={
        'deviceId': "SBS15", 
        'dateTime': "2022-03-19 00:20:37", 
        'ward': "B1-3.2", 
        'bed': "3", 
        'Heart_Rate': 150, 
        'Heart_Rate_Status': 'unhealthy',
        'Blood_Pressure': 93, 
        'Blood_Pressure_Status': 'healthy',
        'Oxygen_Level': 30 ,
        'Oxygen_Level_Status': 'unhealthy',
        'Alert': 'true'
      })
    batch.put_item(Item= {
        'deviceId': "SBS016", 
        'dateTime': "2022-03-19 00:20:37", 
        'ward': "B1-3.2", 
        'bed': "8", 
        'Heart_Rate': 93, 
        'Heart_Rate_Status': 'healthy',
        'Blood_Pressure': 77, 
        'Blood_Pressure_Status': 'healthy',
        'Oxygen_Level': 76 ,
        'Oxygen_Level_Status': 'healthy',
        'Alert': 'false'
      })
    batch.put_item(Item={
        'deviceId': "SBS017", 
        'dateTime': "2022-03-19 00:20:37", 
        'ward': "B1-3.2", 
        'bed': "9", 
        'Heart_Rate': 94, 
        'Heart_Rate_Status': 'healthy',
        'Blood_Pressure': 93, 
        'Blood_Pressure_Status': 'healthy',
        'Oxygen_Level': 96 ,
        'Oxygen_Level_Status': 'healthy',
        'Alert': 'false'
      })
    batch.put_item(Item={
        'deviceId': "SBS018", 
        'dateTime': "2022-03-19 00:20:37", 
        'ward': "B1-3.2", 
        'bed': "10", 
        'Heart_Rate': 115, 
        'Heart_Rate_Status': 'unhealthy',
        'Blood_Pressure': 93, 
        'Blood_Pressure_Status': 'healthy',
        'Oxygen_Level': 96 ,
        'Oxygen_Level_Status': 'healthy',
        'Alert': 'true'
      })
    batch.put_item(Item={
        'deviceId': "SBS19", 
        'dateTime': "2022-03-19 00:20:37", 
        'ward': "B1-3.2", 
        'bed': "11", 
        'Heart_Rate': 94, 
        'Heart_Rate_Status': 'healthy',
        'Blood_Pressure': 93, 
        'Blood_Pressure_Status': 'healthy',
        'Oxygen_Level': 96 ,
        'Oxygen_Level_Status': 'healthy',
        'Alert': 'false'
      })
print(batch)