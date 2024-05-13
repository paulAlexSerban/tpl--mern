#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

if [ "$#" -ne 2 ]; then
  echo "You need to provide the name of the app as a slug and as a formatted name"
  echo "Example: ./generate-simple-fe-app.bash simple-fe-app 'Simple FE App'"
  exit 1
fi

export NAME_SLUG=$1
export NAME_FORMATTED=$2

bash ./_frontend_apps_vite-react-ts-app.bash
bash ./_backend_middleware_simple-proxy.bash
bash ./_infrastructure_docker-simple-fe-setup.bash
bash ./_infrastructure_env-simple-env.bash
bash ./_tools_develop-scripts.bash