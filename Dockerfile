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
CMD ["nginx", "-g", "daemon off;"]
