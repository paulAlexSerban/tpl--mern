#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit
source ../.env
echo '@TODO: script to publish images to AWS S3'
echo '@TODO: do not commit  images to git'
echo '@TODO: do not process assets on github actions - assets are processed locally and then pushed to AWS S3'
