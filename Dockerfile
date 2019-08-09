FROM node:8.9.4-alpine as builder

WORKDIR /react-shell

COPY . /react-shell/

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    && npm install --registry=https://registry.npm.taobao.org \
    && apk del .gyp

RUN export NODE_ENV=production \
    && export PUBLIC_PATH=//www.mcaws.com:8080/ \
    && npm run build

FROM nginx:1.17.2 as prod

COPY --from=builder /react-shell/dist /usr/share/nginx/html
