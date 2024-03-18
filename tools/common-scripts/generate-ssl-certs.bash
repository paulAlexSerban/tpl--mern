#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "Generating SSL certificates"
mkdir -p ../../backend/proxy/dist/openssl
openssl req -x509 -newkey rsa:4096 -keyout ../../backend/proxy/dist/openssl/devcamper-key.pem -out ../../backend/proxy//dist/openssl/devcamper-cert.pem -days 365 -nodes -subj '/CN=devcamper.localhost'
# openssl req -x509 -newkey rsa:4096 -keyout ../../backend/proxy//dist/openssl/component-library-key.pem -out ../../backend/proxy//dist/openssl/component-library-cert.pem -days 365 -nodes -subj '/CN=component-library.localhost'
