FROM node:alpine as builder

RUN mkdir -p /app

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN chown -R node /app
USER node

RUN npm run build

FROM nginx
EXPOSE 3000 
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build  /usr/share/nginx/html