FROM node:lts
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
RUN npm install -g serve
CMD ["serve", "dist", "-s", "-p", "8080"]