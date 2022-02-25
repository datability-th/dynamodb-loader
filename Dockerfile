FROM node:14.17.0-stretch
COPY . /app
WORKDIR /app
RUN npm install
CMD node main.js