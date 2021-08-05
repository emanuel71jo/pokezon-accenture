  
FROM node:14-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn typeorm migration:run
EXPOSE 3333
CMD ["yarn", "dev"]
