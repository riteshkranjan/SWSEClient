FROM nginx:alpine
LABEL maintainer="ritesh_ranjan@infosys.com"
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY dist/ .
