#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
. ../.env
bash ../proxy/scripts/generate-ssl-certs.bash
echo "🟢  START 🐳  ${FORMATED_PROJECT_NAME}"
docker-compose --env-file ../.env \
  --file ../docker-compose.dev.yml \
  up --detach --build
