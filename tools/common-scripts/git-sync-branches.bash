#!/bin/bash

echo "[ info ] Checkout ot MAIN branch"
git checkout main

echo "[ info ] Pull changes on MAIN branch"
git pull

echo "[ info ] Checkout RELEASE branch"
git checkout release

echo "[ info ] Merge main branch in RELEASE branch"
git merge main

echo "[ info ] Push synchronized RELEASE branch to remote repository"
git push

echo "[ info ] Checkout DEVELOP branch"
git checkout develop

echo "[ info ] Merge MAIN branch in DEVELOP branch"
git merge main

echo "[ info ] Push synchronized DEVELOP branch to remote repository"
git push
