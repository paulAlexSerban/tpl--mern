#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

cp -r ../_templates/infrastructure_env-full-stack-mock-env/* ../../../infrastructure/env/

# search and replace {{infrastructure_env-full-stack-mock-env}} with PROJECT_NAME_SLUG
find ../../../infrastructure/env -type f -exec sed -i '' -e "s/{{infrastructure_env-full-stack-mock-env}}/${PROJECT_NAME_SLUG}/g" {} \;

# find files ending with .template and rename it to ${PROJECT_NAME_SLUG}.compose.env
find ../../../infrastructure/env -type f -name "*.template" -exec bash -c 'mv "$1" "../../../infrastructure/env/${PROJECT_NAME_SLUG}.compose.env"' - '{}' \;