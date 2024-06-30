#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

ENV_FILE="../../infrastructure/env/spot-share.compose.env"
COMPOSE_FILE_DEV="../../infrastructure/docker/docker-compose.spot-share.dev.yml"
COMPOSE_FILE_PROD="../../infrastructure/docker/docker-compose.spot-share.prod.yml"

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

function help() {
    echo "Usage: $0 {up|down|up-prod|logs}"
}

$1
