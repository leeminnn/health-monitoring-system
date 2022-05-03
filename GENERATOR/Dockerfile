FROM python:3-slim
WORKDIR /generator
RUN pip install awscli
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY generator.py .
CMD ["python", "generator.py"]