#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../.env

echo "Dev ${FORMATED_PROJECT_NAME}..."

npm --prefix .. run dev