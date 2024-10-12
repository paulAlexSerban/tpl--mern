#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export HOST_USER_ID=$(id -u)
export HOST_GROUP_ID=$(id -g)

ENV_FILE="../../infrastructure/env/dj-events.compose.env"
COMPOSE_FILE_DEV="../../infrastructure/docker/dev/docker-compose.dj-events.dev.yml"
DATABASE_BACKUP_FOLDER="../../database/seeds/dj-events-db"

source $ENV_FILE

function list() {
    echo "[ 📜 🐳 compose list ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} ps
}

function backup-database() {
    echo "[ 🔄 🐳 compose backup database ]"
    # if [ -f "${DATABASE_BACKUP_FOLDER}/dj-events-backup.sql" ]; then
    #     echo "[ info ] Backup exists, copying to old folder"
    #     mv ${DATABASE_BACKUP_FOLDER}/dj-events-backup.sql ${DATABASE_BACKUP_FOLDER}/dj-events-backup-$(date +%F_%H-%M-%S).sql
    # fi
    docker exec dj-events_mariadb-database-service mariadb-dump -u${DATABASE_USERNAME} -p${DATABASE_PASSWORD} ${DATABASE_NAME} >${DATABASE_BACKUP_FOLDER}/dj-events-backup.sql
}

function restore-database() {
    echo "[ 🔄 🐳 compose restore database ]"

    # check if database service is available if not retry 3 times with 5 seconds interval
    for i in {1..3}; do
        echo "[ ℹ️  info ] ⏳  Checking if database service is available"
        docker exec dj-events_mariadb-database-service mariadb -u${DATABASE_USERNAME} -p${DATABASE_PASSWORD} ${DATABASE_NAME} -e "SELECT 1" && break
        sleep 10
    done

    if [ -f "${DATABASE_BACKUP_FOLDER}/dj-events-backup.sql" ]; then
        echo "[ ℹ️  info ] Restoring database from backup"
        docker exec -i dj-events_mariadb-database-service mariadb -u${DATABASE_USERNAME} -p${DATABASE_PASSWORD} ${DATABASE_NAME} <${DATABASE_BACKUP_FOLDER}/dj-events-backup.sql
        echo " [ ✅ success ] Database restored"
    else
        echo "[ ❌ error ] No backup file found"
    fi
}

function up() {
    echo "[ 🟢 🐳 compose up ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} up \
        --detach --build
    restore-database
    list
}

function recreate-ssr-service() {
    echo "[ 🔄 🐳 compose recreate ssr-service ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} up \
        --detach --build --force-recreate ssr-service
    list
}

function recreate-strapi-cms() {
    echo "[ 🔄 🐳 compose recreate strapi-cms ]"
    docker compose \
        --env-file ${ENV_FILE} \
        --file ${COMPOSE_FILE_DEV} up \
        --detach --build --force-recreate strapi-cms
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

function help() {
    echo "Usage: $0 {up|down|logs}"
}

$1
