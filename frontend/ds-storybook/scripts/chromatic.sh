#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
source ../.env

echo "🌈 Chromatic"
echo "🌈 Chromatic: Starting build"

yarn --cwd .. run build:storybook

yarn chromatic --project-token=$CHROMATIC_PROJECT_TOKEN \
               --build-script-name=build:storybook \
               --no-interactive