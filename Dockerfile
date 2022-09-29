# Dockerfile
FROM node:16
WORKDIR /app
ADD package.json package-lock.json /app/
RUN npm i

ADD . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone


CMD npm run prd-dev && npx pm2 log
