FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /app


COPY package.json .
COPY package-lock.json .



EXPOSE 3000
EXPOSE 3004

COPY . .



CMD ["npm", "start"]