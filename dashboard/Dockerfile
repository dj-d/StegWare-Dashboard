FROM node:lts-alpine as builder

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --production --silent && npm audit fix

COPY . .

