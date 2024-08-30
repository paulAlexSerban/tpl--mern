#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

ENV_FILE="../../infrastructure/env/form-user-list.compose.env"
COMPOSE_FILE_DEV="../../infrastructure/docker/dev/docker-compose.form-user-list.dev.yml"
COMPOSE_FILE_PROD="../../infrastructure/docker/prod/docker-compose.form-user-list.prod.yml"

function help() {
    echo "Usage: $0 <up|down|logs|up-prod|down-prod>"
    echo "  up: starts the development environment"
    echo "  down: stops the development environment"
    echo "  logs: shows the logs of the development environment"
    echo "  up-prod: starts the production environment"
    echo "  down-prod: stops the production environment"
}

if [ -z "$1" ]; then
    help
    exit 1
fi

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

$1