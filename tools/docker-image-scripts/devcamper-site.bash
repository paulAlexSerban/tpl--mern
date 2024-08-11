#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env

PROJECT_PATH="../../frontend/sites/devcamper-site"
PACKAGE_NAME=$(node -p "require('${PROJECT_PATH}/package.json').name.split('/').pop()")
PROJECT_NAME=$(node -p "require('${PROJECT_PATH}/package.json').name.split('/').join('__').split('@').pop()")
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
    echo "🚧  Building..."
    docker build \
        --build-arg CONTAINER_PORT=${CONTAINER_PORT} \
        --tag ${PROJECT_NAME}:latest \
        -f ${PROJECT_PATH}/Dockerfile.dev \
        ../../ # the monorepo root
    echo "✅  Build complete"
}

function build-prod() {
    echo "🚧  Building..."
    docker build \
        --build-arg CONTAINER_PORT=${CONTAINER_PORT} \
        --tag ${PROJECT_NAME}:latest \
        -f ${PROJECT_PATH}/Dockerfile.prod \
        ../../ # the monorepo root
    echo "✅  Build complete"
}

function run() {
    echo "🚀  Running..."
    docker run -it --rm --detach \
        -p ${HOST_PORT}:${CONTAINER_PORT} \
        --name ${PROJECT_NAME} ${PROJECT_NAME}:latest
    echo "Server listening to http://localhost:${HOST_PORT}" # Fixed message to use HOST_PORT
    echo "✅  Run complete"
}

function run-prod() {
    echo "🚀  Running..."
    docker run -it --rm --detach \
        -p ${HOST_PORT}:80 \
        --name ${PROJECT_NAME} ${PROJECT_NAME}:latest
    echo "Server listening to http://localhost:${HOST_PORT}" # Fixed message to use HOST_PORT
    echo "✅  Run complete"
}

function stop() {
    echo "🛑  Stopping..."
    docker stop $(docker ps -q --filter ancestor=${PROJECT_NAME}:latest)
    echo "✅  Stop complete"
}

function clean() {
    echo "🧹  Cleaning..."
    docker image rm ${PROJECT_NAME}:latest
    echo "✅  Clean complete"
}

function logs() {
    docker logs ${CONTAINER_NAME}
}

$1 && echo "Done" || echo "Failed"
