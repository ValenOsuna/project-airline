FROM ubuntu:24.04

WORKDIR /app

COPY . .

RUN apt update && apt upgrade -y

RUN apt install -y nodejs npm

RUN npm install

RUN npm start

EXPOSE 3000