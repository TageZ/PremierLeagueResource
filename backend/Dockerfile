FROM python:3.12-alpine
EXPOSE 5000/tcp
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY ./*.py /app/
COPY teams.json .
CMD [ "python", "./main.py" ]