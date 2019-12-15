FROM node:latest
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN npm run build
ENV NODE_ENV=dev
ENV MYSQL_USER=root
ENV MYSQL_PASS=""
ENV MYSQL_HOST=127.0.0.1
ENV MYSQL_PORT=3306
ENV MYSQL_DATABASE=demo

EXPOSE 3000
CMD [ "npm", "run", "start" ]
