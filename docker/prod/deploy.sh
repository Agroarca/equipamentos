#!/bin/bash

cd /var/www/equipamentos/projeto

git checkout main --force
git pull

cd /var/www/equipamentos

sudo docker compose build
sudo docker compose down
sudo docker compose up -d

sudo chmod +x deploy.sh
