 
FROM node:20.13.1-alpine3.19 as build

WORKDIR /app/src

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

FROM node:20.13.1-alpine3.19

RUN addgroup -S nyglo && adduser -S nyglouser -G nyglo

USER nyglouser

WORKDIR /usr/app

COPY --from=build /app/src/dist/nyglo/ ./

EXPOSE 4000

CMD node server/server.mjs