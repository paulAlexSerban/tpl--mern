#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

if [ -z "$1" ]; then
    help
    exit 1
fi

if [ -z "$2" ]; then
    echo "Please provide the app name"
    exit 1
fi

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

APP_NAME=$2
ENV_FILE="../../infrastructure/env/${APP_NAME}.compose.env"
COMPOSE_FILE_DEV="../../infrastructure/docker/dev/docker-compose.${APP_NAME}.dev.yml"
COMPOSE_FILE_PROD="../../infrastructure/docker/prod/docker-compose.${APP_NAME}.prod.yml"

function list() {
    echo "[ 📜 🐳 compose list ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} ps
}

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} up \
        --detach --build
    list
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} down \
        --volumes --rmi all
    list
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} logs \
        --follow
}

function up-prod() {
    echo "[ 🟢 🐳 compose up production build ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_PROD} up \
        --detach --build --wait
    list
}

function down-prod() {
    echo "[ 🛑 🐳 compose down production build ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_PROD} down \
        --volumes --rmi all
    list
}

function help() {
    echo "Available commands:"
    echo "  up - start the Docker container"
    echo "  down - stop the Docker container"
    echo "  logs - show the logs of the Docker container"
    echo "  up-prod - start the Docker container with production build"
    echo "  down-prod - stop the Docker container with production build"
    echo "  list - list the containers"
    echo "  help - show this help"
}

$1 && echo "Done" || echo "Failed"
