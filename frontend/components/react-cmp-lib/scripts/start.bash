#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

export NODE_ENV=development

echo "Build for development"
yarn --cwd .. rollup \
     --config rollup.config.js

echo "Start watching for changes"
yarn --cwd .. rollup \
     --config rollup.config.js \
    --watch