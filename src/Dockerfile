FROM python:3.8.6-buster
WORKDIR /app
COPY ./ /app
RUN python3 -m pip install --upgrade pip


RUN python3 -m pip install -r /app/requirements.txt
#CMD ["python", "/app/wsgi.py", "80"]
CMD ["python3", "-m", "gunicorn", "-w", "4", "-b", "0.0.0.0:80","app:app"]