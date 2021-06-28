#!/bin/sh
cd dist

git init
echo 'dawidwijata.pl' > CNAME
git add -A

git config user.email "dawid.wijata@hotmail.com"
git config user.name "Dawid Wijata"

git remote add origin https://github.com/BordowyRydwan/BordowyRydwan.github.io.git
git commit -m 'deploy'
git push -f origin master:gh-pages