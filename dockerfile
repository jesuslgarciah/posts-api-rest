FROM node:13

WORKDIR /app/

COPY package.json /app/

# RUN npm install -g nodemon

RUN npm install

COPY . /app/

