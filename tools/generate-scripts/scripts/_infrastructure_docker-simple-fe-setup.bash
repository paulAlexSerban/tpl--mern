#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

cp -r ../_templates/infrastructure_docker-simple-fe-compose/* ../../../infrastructure/docker/

# search and replace {{infrastructure_docker-simple-slug}} with PROJECT_NAME_SLUG
find ../../../infrastructure/docker -type f -exec sed -i '' -e "s/{{infrastructure_docker-simple-slug}}/${PROJECT_NAME_SLUG}/g" {} \;

# find files ending with .template and rename it to docker-compose.${PROJECT_NAME_SLUG}.dev.yml
find ../../../infrastructure/docker -type f -name "*.template" -exec bash -c 'mv "$1" "../../../infrastructure/docker/docker-compose.${PROJECT_NAME_SLUG}.dev.yml"' - '{}' \;