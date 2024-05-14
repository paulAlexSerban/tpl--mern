#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose --env-file ../../infrastructure/env/slider-w-buttons.compose.env \
    --file ../../infrastructure/docker/docker-compose.slider-w-buttons.dev.yml \
    up --detach --build
    docker compose --env-file ../../infrastructure/env/slider-w-buttons.compose.env \
    ps
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose --env-file ../../infrastructure/env/slider-w-buttons.compose.env \
    --file ../../infrastructure/docker/docker-compose.slider-w-buttons.dev.yml \
    down --volumes --rmi all
    docker compose --env-file ../../infrastructure/env/slider-w-buttons.compose.env \
    ps
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose --env-file ../../infrastructure/env/slider-w-buttons.compose.env \
    --file ../../infrastructure/docker/docker-compose.slider-w-buttons.dev.yml \
    logs --follow
}

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1