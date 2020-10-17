From node:alpine
WORKDIR /servidor
COPY package.json ./

RUN npm i 
COPY . .

CMD ["npm", "start"]