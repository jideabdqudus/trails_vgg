Node Build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

Nginx Serve
FROM nginx:1.18.0-alpine
COPY /usr/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/trail-web /share/nginx/html
EXPOSE 4000