#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose --env-file ../../infrastructure/env/emaily-user-feedback.compose.env \
    --file ../../infrastructure/docker/docker-compose.emaily-user-feedback.dev.yml \
    up --detach --build
    docker compose --env-file ../../infrastructure/env/emaily-user-feedback.compose.env \
    ps
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose --env-file ../../infrastructure/env/emaily-user-feedback.compose.env \
    --file ../../infrastructure/docker/docker-compose.emaily-user-feedback.dev.yml \
    down --volumes --rmi all
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose --env-file ../../infrastructure/env/emaily-user-feedback.compose.env \
    --file ../../infrastructure/docker/docker-compose.emaily-user-feedback.dev.yml \
    logs --follow
}

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1