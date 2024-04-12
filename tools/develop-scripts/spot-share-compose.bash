#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose --env-file ../../infrastructure/env/spot-share.compose.env \
    --file ../../infrastructure/docker/docker-compose.spot-share.dev.yml \
    up --detach --build
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose --env-file ../../infrastructure/env/spot-share.compose.env \
    --file ../../infrastructure/docker/docker-compose.spot-share.dev.yml \
    down --volumes --rmi all
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose --env-file ../../infrastructure/env/spot-share.compose.env \
    --file ../../infrastructure/docker/docker-compose.spot-share.dev.yml \
    logs --follow
}

function up-prod() {
    echo "[ 🟢 🐳 compose up production build ]"
    docker compose --env-file ../../infrastructure/env/spot-share.compose.env \
    --file ../../infrastructure/docker/docker-compose.spot-share.prod.yml \
    up --detach --build --wait
}

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1