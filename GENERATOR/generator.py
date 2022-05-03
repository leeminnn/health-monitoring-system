# Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# Script to generate simulated IoT device parameters data

import json
import random
import datetime
import boto3
import time

file1 = open("iot_devices.txt", "r")
deviceNames = []
wards = {}
beds = {}
for line in file1:
    lineSplit = line.split("\t")
    deviceName = lineSplit[0]
    wardName = lineSplit[1]
    bedNo = int(lineSplit[2].rstrip('\n'))
    deviceNames.append(deviceName)
    wards[deviceName] = wardName
    beds[deviceName] = bedNo

sqs = boto3.resource('sqs', region_name='ap-southeast-1')
# TBC #change name and delay to send more requests
queue = sqs.get_queue_by_name(QueueName='queue-url')


def getIoTValue():
    data = {}
    data['deviceId'] = random.choice(deviceNames)
    data['dateTime'] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    data['ward'] = wards[data['deviceId']]
    data['bed'] = beds[data['deviceId']]
    data = getHeartRateValues(data)
    data = getBloodPressureValues(data)
    data = getOxygenLevelValues(data)
    return data

# generate Heart Rate values


def getHeartRateValues(data):
    healthyHR = random.randint(60, 100)
    unhealthyHR = random.randint(40, 120)

    data['Heart Rate'] = random.choices(
        [healthyHR, unhealthyHR], [0.8, 0.2])[0]
    return data

# generate Oxygen Level values


def getOxygenLevelValues(data):
    healthyO2 = random.randint(94, 100)
    unhealthyO2 = random.randint(90, 100)

    data['Oxygen Level'] = random.choices(
        [healthyO2, unhealthyO2], [0.8, 0.2])[0]
    return data

# generate Blood Pressure values


def getBloodPressureValues(data):
    healthyBP = random.randint(90, 120)
    unhealthyBP = random.randint(80, 150)

    data['Blood Pressure'] = random.choices(
        [healthyBP, unhealthyBP], [0.8, 0.2])[0]
    return data


# Generate each parameter's data input in varying proportions
# TBC #change iot output limit - just to not exceed SQS free-tier (1 million requests per month)
LIMIT = 10
count = 0
while count < LIMIT:
    count += 1
    time.sleep(0.1)
    data = json.dumps(getIoTValue())
    print(data)
    queue.send_message(MessageBody=data, MessageGroupId='messageGroup1')
