##FROM nginx:1.13.3-alpine
## Remove default nginx website
##RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
##COPY nginx.conf /etc/nginx/nginx.conf
##COPY /dist /usr/share/nginx/html
##CMD ["nginx", "-g", "daemon off;"]

#stage1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage2
FROM nginx:alpine
COPY --from=node /app/dist/angularWorkshop /usr/share/nginx/html