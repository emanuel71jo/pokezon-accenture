  
FROM node:14-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 3000
# CMD ["yarn", "start"]
CMD ["node", "server.js"]