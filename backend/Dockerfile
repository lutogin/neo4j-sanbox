FROM node:lts-alpine as builder

WORKDIR /app

COPY . .

RUN yarn install

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000 9229

CMD yarn start:dev
