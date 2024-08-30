#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "Clean up ./lib folder "
rm -rfv ../lib

export NODE_ENV=development

yarn --cwd .. rollup \
     --config rollup.config.js