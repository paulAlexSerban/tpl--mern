FROM node:18.17.1 as base

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

# Expose the port the app runs on
EXPOSE 5000

# Bundle app source
COPY . /usr/src/app/

# Command to run when the container is ready
# Separate arguments as separate values in the array
CMD [ "yarn", "run", "develop:fortunes_api"]