# Node Build
FROM node:12.7-alpine AS build
WORKDIR /src/app
COPY src/package.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx Serve
FROM nginx:1.18.0-alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/app/dist/trail-web /share/nginx/html
EXPOSE 4000