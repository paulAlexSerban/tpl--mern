#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env
. ../../infrastructure/env/spot-share.compose.env

PROJECT_PATH="../../frontend/apps/spot-share-app"
PACKAGE_NAME=$(node -p "require('${PROJECT_PATH}/package.json').name.split('/').pop()")
# this trimmings are necessary to make the project name compatible with docker
PROJECT_NAME=$(node -p "require('${PROJECT_PATH}/package.json').name.split('/').join('_').split('--').join('-').split('@').pop()")
PROJECT_VERSION=$(node -p "require('${PROJECT_PATH}/package.json').version")

DEV_BASE_IMAGE=$(cat ${PROJECT_PATH}/Dockerfile.dev | grep FROM | awk '{print $2}')
PROD_BASE_IMAGE=$(cat ${PROJECT_PATH}/Dockerfile.prod | grep FROM | awk '{print $2}')

HOST_PORT=8080
CONTAINER_PORT=3000

IMAGE_NAME=${PROJECT_NAME}:${PROJECT_VERSION}
CONTAINER_NAME=${PROJECT_NAME}

echo "📦  Package ${PROJECT_NAME}@${PROJECT_VERSION}"

if [ -z "$1" ]; then
    help
    exit 1
fi

function help() {
    echo "Available commands:"
    echo "  build - build the Docker image"
    echo "  run - run the Docker container"
    echo "  stop - stop the Docker container"
    echo "  clean - remove the Docker image"
    echo "  logs - show the logs of the Docker container"
}

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

$1 && echo "[ ✅ ] Done" || echo "[ 🚫 ]Failed"