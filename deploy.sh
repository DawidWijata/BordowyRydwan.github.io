#!/bin/sh
cd dist

git init
# echo 'dawidwijata.tech' > CNAME
git add -A

git config user.email "dawid.wijata@hotmail.com"
git config user.name "Dawid Wijata"

git remote add origin https://github.com/BordowyRydwan/portfolio.git
git commit -m 'deploy'
git push -f origin master:gh-pages