FROM node:18.17.1 as builder

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app/

RUN yarn install
# if you build you code for production
# RUN npm ci --ony=production

# Bundle app source
COPY . /usr/src/app/

# Build your application
RUN yarn run build:prod

FROM node:18.17.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app/

RUN yarn install

COPY --from=builder /usr/src/app/dist ./dist

CMD [ "yarn", "run", "start"]