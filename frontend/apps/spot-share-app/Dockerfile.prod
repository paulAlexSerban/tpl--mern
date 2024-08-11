FROM node:20.12.0 as builder

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

ARG VITE_APP_BACKEND_URL
ARG VITE_APP_ASSET_URL
ARG VITE_GOOGLE_MAPS_API_KEY

ENV VITE_APP_BACKEND_URL $VITE_APP_BACKEND_URL
ENV VITE_APP_ASSET_URL $VITE_APP_ASSET_URL
ENV VITE_GOOGLE_MAPS_API_KEY $VITE_GOOGLE_MAPS_API_KEY

RUN yarn run build:prod

# Command to run when the container is ready
# Separate arguments as separate values in the array
# CMD [ "yarn", "run", "preview"]

# Stage 2
FROM nginx:latest

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log
 
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf