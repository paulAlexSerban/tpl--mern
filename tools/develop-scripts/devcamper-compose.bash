#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose --env-file ../../infrastructure/env/devcamper.compose.env \
    --file ../../infrastructure/docker/docker-compose.devcamper.dev.yml \
    up --detach --build
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose --env-file ../../infrastructure/env/devcamper.compose.env \
    --file ../../infrastructure/docker/docker-compose.devcamper.dev.yml \
    down --volumes --rmi all
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose --env-file ../../infrastructure/env/devcamper.compose.env \
    --file ../../infrastructure/docker/docker-compose.devcamper.dev.yml \
    logs --follow
}

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1