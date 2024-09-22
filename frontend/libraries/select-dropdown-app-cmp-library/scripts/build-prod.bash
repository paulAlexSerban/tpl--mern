#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "Clean up ./lib folder "
rm -rfv ../lib

export NODE_ENV=production

yarn --cwd .. rollup \
     --config rollup.config.js