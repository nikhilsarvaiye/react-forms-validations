# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY / ./

# COPY configs ./configs
# COPY package.json ./
# COPY package-lock.json ./
# COPY src ./src

# RUN npm install
# COPY ./node_modules ./node_modules

# RUN npm install react-scripts@3.4.1 -g --silent

# start app
# CMD ["npm", "run build"]

# -------------- Steps -------------- 

RUN npm install

RUN npm rebuild node-sass
# this will create a prod build in dist
RUN npm run build 

# To Build Docker Image
# docker build --pull --rm -f "Dockerfile" -t reactforms:latest "."

# To Run image with Container
# docker run -p 4000:80/tcp  reactforms:latest

# copy build
COPY dist ./

CMD ["node", "express.js"]
# CMD ["npm", "run build"]