FROM node:22-alpine

WORKDIR /app
# copy pkg that use in the project
COPY package*.json ./

#install dependencies
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm" , "start"]