FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
ENV NODE_ENV=dev
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
CMD [ "npm", "run", "start" ]
