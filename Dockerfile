FROM node:8.9.4-alpine

WORKDIR /react-shell

COPY . /react-shell/

RUN apk add --no-cache --virtual .gyp \
      python \
      make \
      g++ \
      && npm install --registry=https://registry.npm.taobao.org \
      && apk del .gyp

RUN export NODE_ENV=production \
      && export TARGET=githubpages \
      && export PUBLIC_PATH=./ \
      && npm run build