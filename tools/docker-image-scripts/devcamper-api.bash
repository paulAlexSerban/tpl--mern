#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env
. ../../infrastructure/env/devcamper.compose.env

PROJECT_PATH="../../backend/api/devcamper-api"
PACKAGE_NAME=$(node -p "require('$PROJECT_PATH/package.json').name.split('/').pop()")
PROJECT_NAME=$(node -p "require('$PROJECT_PATH/package.json').name.split('/').join('__').split('@').pop()")
PROJECT_VERSION=$(node -p "require('$PROJECT_PATH/package.json').version")

DEV_BASE_IMAGE=$(cat $PROJECT_PATH/Dockerfile.dev | grep FROM | awk '{print $2}')
PROD_BASE_IMAGE=$(cat $PROJECT_PATH/Dockerfile.prod | grep FROM | awk '{print $2}')

HOST_PORT=3001
CONTAINER_PORT=5000

IMAGE_NAME=$PROJECT_NAME:$PROJECT_VERSION
CONTAINER_NAME=$PROJECT_NAME

echo "📦  Package $PROJECT_NAME@$PROJECT_VERSION"

if [ -z "$1" ]; then
  help
  exit 1
fi

function check_base_image() {
  echo "Checking base image $DEV_BASE_IMAGE"
  if [[ "$(docker images -q $DEV_BASE_IMAGE 2>/dev/null)" == "" ]]; then
    echo "Base image $DEV_BASE_IMAGE not found locally"
    echo "Please build the base image first with: make core_build"
    exit 1
  else
    echo "Base image $DEV_BASE_IMAGE found locally"
  fi
}

function build() {
  echo "🚧  Building..."
  check_base_image
  docker build \
    --build-arg CONTAINER_PORT=$CONTAINER_PORT \
    --tag $PROJECT_NAME:latest \
    -f $PROJECT_PATH/Dockerfile.dev \
    ../../ # the monorepo root
  echo "✅  Build complete"
}

function build-prod() {
  echo "🚧  Building..."
  check_base_image
  docker build \
    --build-arg CONTAINER_PORT=$CONTAINER_PORT \
    --tag $PROJECT_NAME:latest \
    -f $PROJECT_PATH/Dockerfile.prod \
    ../../ # the monorepo root
  echo "✅  Build complete"
}

# use DB_ATLAS_URI instead of DB_URI when running the container with the compose file
function run() {
  echo "🚀  Running..."
  docker run -it --rm --detach \
    -p ${HOST_PORT}:${CONTAINER_PORT} \
    --env NODE_ENV=development \
    --env DEVCAMPER_GEOCODER_PROVIDER=$DEVCAMPER_GEOCODER_PROVIDER \
    --env DEVCAMPER_GEOCODER_API_KEY=$DEVCAMPER_GEOCODER_API_KEY \
    --env DB_URI=$DB_ATLAS_URI \
    --env PORT=$PORT \
    --name $PROJECT_NAME $PROJECT_NAME:$PROJECT_VERSION
  echo "Server listening to http://localhost:${HOST_PORT}" # Fixed message to use HOST_PORT
  echo "✅  Run complete"
}

# use DB_ATLAS_URI instead of DB_URI when running the container with the compose file
function run-prod() {
  echo "🚀  Running..."
  docker run -it --rm --detach \
    -p ${HOST_PORT}:${CONTAINER_PORT} \
    --env NODE_ENV=production \
    --env DEVCAMPER_GEOCODER_PROVIDER=$DEVCAMPER_GEOCODER_PROVIDER \
    --env DEVCAMPER_GEOCODER_API_KEY=$DEVCAMPER_GEOCODER_API_KEY \
    --env DB_URI=$DB_ATLAS_URI \
    --env PORT=$PORT \
    --name $PROJECT_NAME $PROJECT_NAME:latest
  # echo "Server listening to http://localhost:${HOST_PORT}" # Fixed message to use HOST_PORT
  echo "✅  Run complete"
}

function stop() {
  echo "🛑  Stopping..."
  docker stop $(docker ps -q --filter ancestor=$PROJECT_NAME:latest)
  echo "✅  Stop complete"
}

function stop-prod() {
  echo "🛑  Stopping..."
  docker stop $(docker ps -q --filter ancestor=$PROJECT_NAME:latest)
  echo "✅  Stop complete"
}

function clean() {
  echo "🧹  Cleaning..."
  docker image rm $PROJECT_NAME:latest
  echo "✅  Clean complete"
}

function logs() {
  docker logs ${CONTAINER_NAME}
}

$1 && echo "Done" || echo "Failed"
