#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../../infrastructure/env/spot-share.compose.env

PROJECT_NAME=$(node -p "require('../../frontend/apps/spot-share-app/package.json').name.split('/').pop()")
PROJECT_VERSION=$(node -p "require('../../frontend/apps/spot-share-app/package.json').version")

function build() {
    echo "Building $PROJECT_NAME:$PROJECT_VERSION"

    # get latest docker image build from same Dockerfile and remove latest tag
    docker rmi $(docker images -q $PROJECT_NAME:latest)

    # Build the docker image

    docker build --tag "paulserbandev/$PROJECT_NAME:$PROJECT_VERSION" \
        --tag "paulserbandev/$PROJECT_NAME:latest" \
        --file ../../frontend/apps/spot-share-app/prod.Dockerfile ../../frontend/apps/spot-share-app/ \
        --build-arg VITE_APP_BACKEND_URL=$VITE_APP_BACKEND_URL \
        --build-arg VITE_APP_ASSET_URL=$VITE_APP_ASSET_URL \
        --build-arg VITE_GOOGLE_MAPS_API_KEY=$VITE_GOOGLE_MAPS_API_KEY
}

$1