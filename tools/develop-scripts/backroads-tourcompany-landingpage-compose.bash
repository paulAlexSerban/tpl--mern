#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.dev.yml up \
        --detach --build
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.dev.yml ps
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.dev.yml down \
        --volumes --rmi all
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.dev.yml ps
}

function logs() {
    echo "[ 📜 🐳 compose logs ]"
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.dev.yml logs \
        --follow
}

function up-prod() {
    echo "[ 🟢 🐳 compose up production build ]"
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.prod.yml up \
        --detach --build --wait
    docker compose --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.prod.yml ps
}

function down-prod() {
    echo "[ 🛑 🐳 compose down production build ]"
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.prod.yml down \
        --volumes --rmi all
    docker compose \
        --env-file ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env \
        --file ../../infrastructure/docker/docker-compose.backroads-tourcompany-landingpage.prod.yml ps
}

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1
