#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

if [ -z "$1" ]; then
  echo "You must provide a project name."
  echo "Example: ./generate-simple-fe-app.bash 'Simple FE App'"
  exit 1
fi

# Convert to lower case
PROJECT_NAME=$(echo "$1" | tr '[:upper:]' '[:lower:]')

# Replace spaces with hyphens
PROJECT_NAME=$(echo "$PROJECT_NAME" | sed 's/ /-/g')

# Remove any characters that aren't letters, numbers, or hyphens
PROJECT_NAME=$(echo "$PROJECT_NAME" | sed 's/[^a-z0-9-]//g')

export PROJECT_NAME_SLUG=$PROJECT_NAME
export PROJECT_NAME_FORMATTED=$1

bash ./_frontend_apps_vite-react-ts-app.bash
bash ./_backend_middleware_simple-proxy.bash
bash ./_infrastructure_docker-simple-fe-setup.bash
bash ./_infrastructure_env-simple-env.bash
bash ./_tools_develop-scripts.bash