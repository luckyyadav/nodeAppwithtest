FROM node:latest
EXPOSE 8000
WORKDIR /APP/
COPY prisma /APP/
COPY package.json /APP/
COPY src /APP/
RUN npm install

CMD ["node", "server.js" ]