#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env
. ../../infrastructure/env/devcamper.compose.env

PROJECT_NAME=$(node -p "require('../../backend/api/devcamper-api/package.json').name.split('/').pop()")
PROJECT_VERSION=$(node -p "require('../../backend/api/devcamper-api/package.json').version")

function run() {
  docker run --detach -p 3000:5000 --name devcamper-api \
    --env NODE_ENV=production \
    --env DEVCAMPER_GEOCODER_PROVIDER=$DEVCAMPER_GEOCODER_PROVIDER \
    --env DEVCAMPER_GEOCODER_API_KEY=$DEVCAMPER_GEOCODER_API_KEY \
    --env DB_URI=$DB_ATLAS_URI \
    --env PORT=$PORT \
    paulserbandev/devcamper-api-v1
}

function build() {
    echo "Building $PROJECT_NAME:$PROJECT_VERSION"

    # get latest docker image build from same Dockerfile and remove latest tag
    docker rmi $(docker images -q $PROJECT_NAME:latest)

    # Build the docker image

    docker build --tag "paulserbandev/$PROJECT_NAME:$PROJECT_VERSION" \
                --tag "paulserbandev/$PROJECT_NAME:latest" \
                --file ../../backend/api/devcamper-api/prod.Dockerfile ../../backend/api/devcamper-api/
}

$1