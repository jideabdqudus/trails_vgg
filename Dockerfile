# Node Build
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY src/package.json ./
COPY src/package-lock.json ./
RUN npm install
COPY . .
RUN npm run build:prod

# Nginx Serve
FROM nginx:1.18.0-alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/trail-web /usr/share/nginx/html
EXPOSE 4000