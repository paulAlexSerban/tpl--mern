#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose --env-file ../../infrastructure/env/navbar-basic.compose.env \
    --file ../../infrastructure/docker/docker-compose.navbar-basic.dev.yml \
    up --detach --build
    docker compose --env-file ../../infrastructure/env/navbar-basic.compose.env \
    ps
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose --env-file ../../infrastructure/env/navbar-basic.compose.env \
    --file ../../infrastructure/docker/docker-compose.navbar-basic.dev.yml \
    down --volumes --rmi all
    docker compose --env-file ../../infrastructure/env/navbar-basic.compose.env \
    ps
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose --env-file ../../infrastructure/env/navbar-basic.compose.env \
    --file ../../infrastructure/docker/docker-compose.navbar-basic.dev.yml \
    logs --follow
}

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1