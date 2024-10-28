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
DATABASE_BACKUP_FOLDER="../../database/seeds/hello-wordpress-db"

source $ENV_FILE

function backup-database() {
    echo "[ 🔄 🐳 compose backup database ]"
    if [ -f "${DATABASE_BACKUP_FOLDER}/hello-wordpress-backup.sql" ]; then
        echo "[ info ] Backup exists, renaming..."
        mv ${DATABASE_BACKUP_FOLDER}/hello-wordpress-backup.sql ${DATABASE_BACKUP_FOLDER}/hello-wordpress-backup-$(date +%F_%H-%M-%S).sql
    fi

    docker exec hello-wordpress_mysql mariadb-dump -u${DATABASE_USER} -p${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} >${DATABASE_BACKUP_FOLDER}/hello-wordpress-backup.sql
}

function restore-database() {
    echo "[ 🔄 🐳 compose restore database ]"

    # check if database service is available if not retry 3 times with 5 seconds interval
    local SLEEP_INTERVAL=5
    for i in {1..3}; do
        SLEEP_INTERVAL=$((SLEEP_INTERVAL * i))
        echo "[ ℹ️  info ] ⏳  Checking if database service is available"
        docker exec hello-wordpress_mysql mariadb -u${DATABASE_USER} -p${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} -e "SELECT 1" && break
        echo "[ ⏳ info ] Waiting for database to be available - $SLEEP_INTERVAL seconds"
        sleep $SLEEP_INTERVAL
    done

    if [ -f "${DATABASE_BACKUP_FOLDER}/hello-wordpress-backup.sql" ]; then
        echo "[ ℹ️  info ] Restoring database from backup"
        docker exec -i hello-wordpress_mysql mariadb -u${DATABASE_USER} -p${DATABASE_PASSWORD} ${COMPOSE_PROJECT_NAME} <${DATABASE_BACKUP_FOLDER}/hello-wordpress-backup.sql
        echo " [ ✅ success ] Database restored"
    else
        echo "[ ❌ error ] No backup file found"
    fi
}

function clean-install() {
    local SLEEP_INTERVAL=5
    for i in {1..3}; do
        SLEEP_INTERVAL=$((SLEEP_INTERVAL * i))
        echo "[ ℹ️  info ] ⏳  Checking if wordpress service is available"
        docker exec $COMPOSE_PROJECT_NAME wp core is-installed --allow-root && break
        echo "[ ⏳ info ] Wainting for wordpress to be installed - $SLEEP_INTERVAL seconds"
        sleep $SLEEP_INTERVAL
    done

    docker exec $COMPOSE_PROJECT_NAME wp theme install twentytwenty --activate --allow-root
    docker exec $COMPOSE_PROJECT_NAME wp plugin delete hello --allow-root
    docker exec $COMPOSE_PROJECT_NAME wp plugin delete akismet --allow-root
    docker exec $COMPOSE_PROJECT_NAME wp theme delete twentytwentyfour --allow-root
    docker exec $COMPOSE_PROJECT_NAME wp theme delete twentytwentythree --allow-root
    docker exec $COMPOSE_PROJECT_NAME wp theme delete twentytwentytwo --allow-root
}

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
    restore-database
    clean-install
    list
}

function down() {
    echo "[ 🛑 🐳 compose down ]"
    backup-database
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

$1 && echo "[ ✅ ] Done" || echo "[ 🚫 ]Failed"