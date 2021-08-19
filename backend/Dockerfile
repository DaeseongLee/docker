FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN chown -Rh $user:$user /app
USER $user

CMD ["npm", "run", "start"]
