#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env
. ../../shared/config/emaily-user-feedback.compose.env

docker run --detach -p 3000:5000 --name emaily-user-feedback-api \
  --env NODE_ENV=production \
  --env EMAILY_GOOGLE_OAUTH_CLIENT_ID=$EMAILY_GOOGLE_OAUTH_CLIENT_ID \
  --env EMAILY_GOOGLE_OAUTH_CLIENT_SECRET=$EMAILY_GOOGLE_OAUTH_CLIENT_SECRET \
  --env EMAILY_GOOGLE_OAUTH_CALLBACK_URL=$EMAILY_GOOGLE_OAUTH_CALLBACK_URL \
  --env EMAILY_COOKIE_KEY=$EMAILY_COOKIE_KEY \
  --env DB_LOCAL_URI=$DB_ATLAS_URI \
  --env MONGO_USERNAME=$MONGO_USERNAME \
  --env MONGO_PASSWORD=$MONGO_PASSWORD \
  --env MONGO_HOSTNAME=$MONGO_HOSTNAME \
  --env MONGO_PORT=$MONGO_PORT \
  --env MONGO_DB=$MONGO_DB \
  --env PORT=$PORT \
  paulserbandev/emaily-user-feedback-api
