#!/bin/bash

START_TIME=$(date +%s)

echo "[ 🚀 🚀 ] Starting Base SPA Dev Setup Smoke Tests..."
# Define the Docker Compose setups to test
COMPOSE_SETUPS=(
    # "backroads-tourcompany-landingpage"
    # "birthday-buddy"
    # "color-generator"
    # "dummy-blog"
    # "form-user-list"
    # "filtered-gallery"
    # "frequently-asked-questions"
    # "json-to-excel"
    # "lorem-ipsum-generator"
    # "megamenu-strapi-clone"
    # "minesweeper-game"
    # "navbar-basic"
    # "reviews"
    # "rnd-axios-http"
    # "select-dropdown-app-vite"
    # "shopping-cart-usereducer"
    # "sidebar-and-modal-basic"
    # "sidebar-tabs"
    "skill-saga"
    # "slider-w-buttons"
    # "to-do-list-grocery-buddy"
    # "tours-booking"
)
CONTAINERS=("nginx-proxy-container" "ui-react-spa-container")

start_compose_setupS() {
    # Start the Docker Compose setup
    echo "[ 🚀 ] Starting ${1} Docker Compose setup..."
    make ${1}_compose-up
}

check_service_status() {
    local SERVICE_NAME=${1}
    local IS_RUNNING=$(docker inspect -f '{{.State.Status}}' "${SERVICE_NAME}")

    if [[ "${IS_RUNNING}" =~ "running" ]]; then
        echo "[ ✅ ✅ ] ${SERVICE_NAME} is ${IS_RUNNING}"
    else
        echo "[ 🚫 🚫 ] ${SERVICE_NAME} is not running."
        exit 1
    fi
}

check_compose_status() {
    # Check if 'birthday-buddy' is running from 'docker compose ls' output
    local STATUS=$(docker compose ls | grep "$1" | awk '{print $2}')

    if [[ "${STATUS}" =~ "running"* ]]; then
        echo "[ ✅ ✅ ] $1 is running."
        make ${1}_compose-down
    else
        echo "[ 🚫 🚫 ] $1 is not running."
        exit 1
    fi
}

for SETUP in "${COMPOSE_SETUPS[@]}"; do
    start_compose_setupS $SETUP
    # sleep 5
    for SERVICE in "${CONTAINERS[@]}"; do
        check_service_status ${SERVICE}
    done
    check_compose_status ${SETUP}
done

END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))
DURATION_MINUTES=$((DURATION / 60))
DURATION_SECONDS=$((DURATION % 60))
echo "[ 🚀 🚀 ] Base SPA Dev Setup Smoke Tests completed in [ ${DURATION_MINUTES}:${DURATION_SECONDS} ] minutes."
