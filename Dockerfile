FROM node:16-alpine

WORKDIR /app

COPY package.json .

RUN yarn --silent

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
