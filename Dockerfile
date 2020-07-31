# Stage 1 - Build process
FROM node:12.2.0-alpine as build

WORKDIR /app

COPY package.json /app/package.json

# install git 
RUN apk update && \
    apk upgrade && \
    apk add git
# RUN npx create-env --env-file .env --env-prefix _ENV_
RUN printenv | less
RUN npm i
COPY . /app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /config/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]