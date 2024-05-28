#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

source ../../infrastructure/env/backroads-tourcompany-landingpage.compose.env

PROJECT_NAME=$(node -p "require('../../frontend/apps/backroads-tourcompany-landingpage-app/package.json').name.split('/').pop()")
PROJECT_VERSION=$(node -p "require('../../frontend/apps/backroads-tourcompany-landingpage-app/package.json').version")

function build() {
    echo "Building $PROJECT_NAME:$PROJECT_VERSION"

    # get latest docker image build from same Dockerfile and remove latest tag
    docker rmi "paulserbandev/$PROJECT_NAME:latest"

    # Build the docker image
    docker build --tag "paulserbandev/$PROJECT_NAME:$PROJECT_VERSION" \
                 --tag "paulserbandev/$PROJECT_NAME:latest" \
                 --file ../../frontend/apps/backroads-tourcompany-landingpage-app/prod.Dockerfile ../../frontend/apps/backroads-tourcompany-landingpage-app/
}

$1