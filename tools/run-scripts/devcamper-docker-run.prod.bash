#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env
. ../../shared/config/devcamper.compose.env

docker run --detach -p 3000:5000 --name devcamper-api \
  --env NODE_ENV=production \
  --env DEVCAMPER_GEOCODER_PROVIDER=$DEVCAMPER_GEOCODER_PROVIDER \
  --env DEVCAMPER_GEOCODER_API_KEY=$DEVCAMPER_GEOCODER_API_KEY \
  --env DB_LOCAL_URI=$DB_ATLAS_URI \
  --env MONGO_USERNAME=$MONGO_USERNAME \
  --env MONGO_PASSWORD=$MONGO_PASSWORD \
  --env MONGO_HOSTNAME=$MONGO_HOSTNAME \
  --env MONGO_PORT=$MONGO_PORT \
  --env MONGO_DB=$MONGO_DB \
  --env PORT=$PORT \
  paulserbandev/devcamper-api-v1
