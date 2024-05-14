#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
# create folder ../../../frontend/apps/$NAME_SLUG folder
mkdir -p ../../../frontend/apps/${NAME_SLUG}-app
# copy content of template folder to ../../../frontend/apps/$NAME_SLUG folder
cp -rfv ../_templates/frontend_apps_vite-react-ts-app/* ../../../frontend/apps/$NAME_SLUG-app/
# search and replace {{frontend_apps_vite-react-ts-app-slug}} with the name of the frontend app
find ../../../frontend/apps/${NAME_SLUG}-app -type f -exec sed -i '' -e "s/{{frontend_apps_vite-react-ts-app-slug}}/${NAME_SLUG}-app/g" {} \;
# search and replace {{frontend_apps_vite-react-ts-app-formatted}} with the name of the frontend app
find ../../../frontend/apps/${NAME_SLUG}-app -type f -exec sed -i '' -e "s/{{frontend_apps_vite-react-ts-app-formatted}}/$NAME_FORMATTED/g" {} \;
# find files ending with .template and remove the .template extension
find ../../../frontend/apps/${NAME_SLUG}-app -type f -name "*.template" -exec bash -c 'mv "$1" "${1%.template}"' - '{}' \;