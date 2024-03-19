#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env
. ../../infrastructure/env/devcamper.compose.env

docker run --detach -p 3000:5000 --name devcamper-api \
  --env NODE_ENV=production \
  --env DEVCAMPER_GEOCODER_PROVIDER=$DEVCAMPER_GEOCODER_PROVIDER \
  --env DEVCAMPER_GEOCODER_API_KEY=$DEVCAMPER_GEOCODER_API_KEY \
  --env DB_URI=$DB_ATLAS_URI \
  --env PORT=$PORT \
  paulserbandev/devcamper-api-v1
