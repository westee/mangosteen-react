#!/usr/bin/env bash
cd dist
git init
git add .
git commit -m "deploy"
git remote add origin git@github.com:westee/react-mangosteen-preview.git
git push -f origin master:master
cd -
