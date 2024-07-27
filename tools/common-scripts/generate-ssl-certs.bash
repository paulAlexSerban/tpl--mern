#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

PROJECT_NAME="devcamper"
CERTS_DIR="../../backend/proxy/dist/openssl"

echo "[ info ] Generating SSL certificates"
mkdir -p ${CERTS_DIR}
openssl req -x509 \
    -newkey rsa:4096 \
    -keyout ${CERTS_DIR}/${PROJECT_NAME}-key.pem \
    -out ${CERTS_DIR}/${PROJECT_NAME}-cert.pem \
    -days 365 \
    -nodes \
    -subj "/CN=${PROJECT_NAME}.localhost"

