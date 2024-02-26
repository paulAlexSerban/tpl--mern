#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

# PROJECT_NAME=$(node -p "require('../../package.json').formattedName.split('/').pop()")
# PROJECT_VERSION=$(node -p "require('../../package.json').version")

# echo "[ 🛑 🐳 compose down ] $PROJECT_NAME:$PROJECT_VERSION"

docker compose --env-file ../../shared/config/spot-share.compose.env \
  --file ../../infrastructure/docker/docker-compose.spot-share.dev.yml \
  down --volumes --rmi all
