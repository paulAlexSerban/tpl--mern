#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit


# copy content of template folder to ../../../tools/develop-scripts folder
cp -r ../_templates/tools_develop-scripts/* ../../../tools/develop-scripts/

# search and replace {{tools_develop-scripts-slug}} with the name of the frontend app
find ../../../tools/develop-scripts -type f -exec sed -i '' -e "s/{{tools_develop-scripts-slug}}/${PROJECT_NAME_SLUG}/g" {} \;

# find files ending with .template and rename it to ${PROJECT_NAME_SLUG}-compose.bash
find ../../../tools/develop-scripts -type f -name "*.template" -exec bash -c 'mv "$1" "../../../tools/develop-scripts/${PROJECT_NAME_SLUG}-compose.bash"' - '{}' \;