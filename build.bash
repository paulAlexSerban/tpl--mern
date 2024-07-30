#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

PROJECT_NAME=$(node -p "require('./package.json').name.split('/').join('__').split('@').pop()")
PROJECT_VERSION=$(node -p "require('./package.json').version")
echo "📦  Package $PROJECT_NAME@$PROJECT_VERSION"

function build() {
    echo "🚧  Building..."
    docker build \
        -t $PROJECT_NAME:$PROJECT_VERSION \
        -f Dockerfile \
        . # the monorepo root
    echo "✅  Build complete"
}

function run() {
    echo "🚀  Running..."
    docker run -it --rm --detach --name $PROJECT_NAME
    echo "✅  Run complete"
}

function stop() {
    echo "🛑  Stopping..."
    docker stop $(docker ps -q --filter ancestor=$PROJECT_NAME:$PROJECT_VERSION)
    echo "✅  Stop complete"
}

function clean() {
    echo "🧹  Cleaning..."
    docker image rm $PROJECT_NAME:$PROJECT_VERSION
    echo "✅  Clean complete"
}

$1