FROM python:3.12-alpine
WORKDIR /app
COPY . .
EXPOSE 8300
CMD ["python", "server.py"]
