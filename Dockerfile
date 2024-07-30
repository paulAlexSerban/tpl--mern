FROM node:20.12.0 as core

RUN yarn global add typescript tsc
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN yarn install
RUN yarn build:shared
RUN yarn build:react-cmp-lib
RUN yarn build:lsg-styles-generic

FROM core as select-dropdown-app-vite-builder
RUN yarn build:select-dropdown-app-vite