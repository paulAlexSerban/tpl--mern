#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
# create folder ../../../backend/middleware/$PROJECT_NAME_SLUG-proxy
mkdir -p ../../../backend/middleware/$PROJECT_NAME_SLUG-proxy
# copy content of template folder to ../../../backend/middleware/$PROJECT_NAME_SLUG-proxy folder
cp -r ../_templates/backend_middleware_simple-proxy/* ../../../backend/middleware/$PROJECT_NAME_SLUG-proxy/
