#!/bin/bash
sleep 10

mongosh --host mongo1:27017 <<EOF
  var cfg = {
    "_id": "myReplicaSet",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "mongo1:27017",
        "priority": 2
      },
      {
        "_id": 1,
        "host": "mongo2:27017",
        "priority": 1
      },
      {
        "_id": 2,
        "host": "mongo3:27017",
        "priority": 1
      }
    ]
  };
  rs.initiate(cfg, { force: true });
EOF

sleep 5

# Check for primary
ATTEMPTS=0
MAX_ATTEMPTS=10
SLEEP_TIME=5

while [ $ATTEMPTS -lt $MAX_ATTEMPTS ]; do
  PRIMARY_EXISTS=$(mongosh --host mongo1:27017 --quiet --eval "rs.isMaster().ismaster")
  if [ "$PRIMARY_EXISTS" = "true" ]; then
    echo "Primary node found, proceeding to create user."
    break
  else
    echo "Waiting for primary node to be elected. Attempt $ATTEMPTS of $MAX_ATTEMPTS."
    sleep $SLEEP_TIME
    ((ATTEMPTS = ATTEMPTS + 1))
  fi
done

if [ $ATTEMPTS -eq $MAX_ATTEMPTS ]; then
  echo "Failed to confirm primary node within the replica set. Exiting."
  exit 1
fi

# Proceed to create user
mongosh --host mongo1:27017 <<EOF
  use admin
  db.createUser({
    user: "root",
    pwd: "example",
    roles: [{ role: "root", db: "admin" }]
  })
  db.getUsers()
EOF
