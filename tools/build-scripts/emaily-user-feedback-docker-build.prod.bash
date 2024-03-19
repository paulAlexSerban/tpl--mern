#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

PROJECT_NAME=$(node -p "require('../../backend/api/emaily-user-feedback-api/package.json').name.split('/').pop()")
PROJECT_VERSION=$(node -p "require('../../backend/api/emaily-user-feedback-api/package.json').version")

echo "Building $PROJECT_NAME:$PROJECT_VERSION"

# get latest docker image build from same Dockerfile and remove latest tag
docker rmi $(docker images -q $PROJECT_NAME:latest)

# Build the docker image

docker build --tag "paulserbandev/$PROJECT_NAME:$PROJECT_VERSION" \
             --tag "paulserbandev/$PROJECT_NAME:latest" \
             --file ../../backend/api/emaily-user-feedback-api/prod.Dockerfile ../../backend/api/emaily-user-feedback-api/