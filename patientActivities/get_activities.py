import boto3
from boto3.dynamodb.conditions import Key, Attr
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv


load_dotenv()

dynamodb = boto3.resource('dynamodb',
                          aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
                          aws_secret_access_key=os.getenv(
                              "AWS_SECRET_ACCESS_KEY"),
                          region_name="ap-southeast-1")
table = dynamodb.Table('IS458-G1T8')


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/patient_activities")
def getInformation(ward: str):
    response = table.scan(FilterExpression=Attr('ward').eq(ward))
    return response['Items']


@app.get("/health")
def healthCheck():
    return "Service is Healthy"


# python -m uvicorn get_activities:app --reload
