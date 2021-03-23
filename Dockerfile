FROM node:latest AS build
WORKDIR /app
COPY package.json ./

COPY . /app

RUN npm install
RUN npm run build

# Nginx Serve
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4000
<<<<<<< HEAD
CMD ["nginx", "-g", "daemon off;"]  
=======
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> d4a6313f5294bcb7172ca117f98bd2d646cbe300
