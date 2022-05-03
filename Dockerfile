#To be moved into 'patient activities' later
# 
FROM python:3.9

# working dir path to be changed
WORKDIR /code

# requirements.txt to be moved as well
COPY ./requirements.txt /code/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# 
COPY ./app /code/app

# 
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
