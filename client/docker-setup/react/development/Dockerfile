#FROM node:16-slim
# temporarily removing "slim" so I can debug in the container
FROM node:16

# Create app directory
WORKDIR /client

# Install app dependencies
COPY package.json package-lock.json ./

COPY . .

RUN npm install

ENV NODE_ENV=development

CMD [ "npm", "run", "dev"]
