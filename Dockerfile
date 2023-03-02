FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install --force
RUN npm install @vue/cli@5.0.8 -g

EXPOSE 8080

CMD ["npm", "run", "serve"]