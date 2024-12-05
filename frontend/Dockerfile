FROM node:20-bullseye

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --force

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
