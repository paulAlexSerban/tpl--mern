#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package"
# rm -rfv ../dist/*
# mkdir -p ../dist/component-library
# cp -rfv ../../frontend/component-library/dist/* ../dist/component-library
# cp -rfv ../../frontend/dashboard/out/* ../dist/