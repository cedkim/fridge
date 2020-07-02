FROM node:14.4.0-stretch
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080:3000
CMD ["npm", "start"]
