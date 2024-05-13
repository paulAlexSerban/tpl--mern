#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

# copy content of template folder to ../../../backend/middleware/$NAME_SLUG-proxy folder
cp -r ../_templates/backend_middleware_simple-proxy ../../../backend/middleware/$NAME_SLUG-proxy
