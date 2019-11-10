FROM node:latest
WORKDIR /usr/src/app
COPY ./ ./
RUN npm install
RUN npm run build
ENV NODE_ENV=dev
EXPOSE 3000
EXPOSE 9229
CMD [ "npm", "run", "start" ]
