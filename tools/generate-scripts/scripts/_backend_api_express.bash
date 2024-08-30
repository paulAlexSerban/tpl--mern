#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
# create folder ../../../backend/api/$PROJECT_NAME_SLUG folder
mkdir -p ../../../backend/api/${PROJECT_NAME_SLUG}-api
# copy content of template folder to ../../../backend/api/$PROJECT_NAME_SLUG folder
cp -rfv ../_templates/backend_api_express/* ../../../backend/api/$PROJECT_NAME_SLUG-api/

# search and replace {{backend_api_express-slug}} with the name of the backend app
find ../../../backend/api/${PROJECT_NAME_SLUG}-api -type f -exec sed -i '' -e "s/{{backend_api_express-slug}}/${PROJECT_NAME_SLUG}-api/g" {} \;

# search and replace {{backend_api_express-formated}} with the name of the backend app
find ../../../backend/api/${PROJECT_NAME_SLUG}-api -type f -exec sed -i '' -e "s/{{backend_api_express-formated}}/$PROJECT_NAME_FORMATTED/g" {} \;

# find files ending with .template and remove the .template extension
find ../../../backend/api/${PROJECT_NAME_SLUG}-api -type f -name "*.template" -exec bash -c 'mv "$1" "${1%.template}"' - '{}' \;