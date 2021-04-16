FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./n

RUN npm i

COPY . .

CMD ["npm", "start"]