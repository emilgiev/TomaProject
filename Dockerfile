FROM alpine:latest

RUN apk add --update nodejs npm

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install -g json-server

EXPOSE 3000
EXPOSE 3004
COPY . .



RUN npm start json-server --watch 'src/react/TomaProject/src/data/db.json' --port 3004

CMD  ["npm", "start" ]