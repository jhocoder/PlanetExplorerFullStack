FROM node:18-alpine


WORKDIR /myapp

COPY package.json package-lock.json ./


RUN npm install


COPY . .


RUN apk add --no-cache python3 py3-pip


RUN npm run build


EXPOSE 3000

    CMD ["npm", "start"]

