#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export NAME_SLUG='test'
export NAME_FORMATTED='Test App'

bash ./_frontend_apps_vite-react-ts-app.bash
bash ./_backend_middleware_simple-proxy.bash
bash ./_infrastructure_docker-simple-fe-setup.bash