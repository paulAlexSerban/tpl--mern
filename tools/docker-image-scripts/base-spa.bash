#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

. ../../.env

if [ -z "$1" ]; then
    help
    exit 1
fi

if [ -z "$2" ]; then
    echo "Please provide the app name"
    exit 1
fi

APP_NAME=$2
PROJECT_PATH="../../frontend/apps/${APP_NAME}"
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

function help() {
    echo "Available commands:"
    echo "  build - build the Docker image"
    echo "  run - run the Docker container"
    echo "  stop - stop the Docker container"
    echo "  clean - remove the Docker image"
    echo "  logs - show the logs of the Docker container"
}

function check_base_image() {
    echo "Checking base image ${DEV_BASE_IMAGE}"
    if [[ "$(docker images -q ${DEV_BASE_IMAGE} 2>/dev/null)" == "" ]]; then
        echo "Base image ${DEV_BASE_IMAGE} not found locally"
        echo "Please build the base image first with: make core_build"
        exit 1
    else
        echo "Base image ${DEV_BASE_IMAGE} found locally"
    fi
}

function build() {
    echo "🚧  Building..."
    check_base_image
    docker build \
        --build-arg CONTAINER_PORT=${CONTAINER_PORT} \
        --tag ${PROJECT_NAME}:latest \
        -f ${PROJECT_PATH}/Dockerfile.dev \
        ../../ # the monorepo root
    echo "✅  Build complete"
}

function build-prod() {
    echo "🚧  Building..."
    check_base_image
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

$1 && echo "[ ✅ ] Done" || echo "[ 🚫 ]Failed"
