FROM python:3-slim
WORKDIR /alert
COPY requirements.txt ./
RUN pip install awscli
RUN pip install --no-cache-dir -r requirements.txt
COPY alert.py .
CMD ["python", "alert.py"]