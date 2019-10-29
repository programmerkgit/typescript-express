FROM node:latest
WORKDIR /usr/src/app
COPY . .
RUN npm install
ENV NODE_ENV=dev
EXPOSE 3000
CMD [ "npm", "run", "nodemon" ]
