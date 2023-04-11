#!/bin/bash

cd /var/www/equipamentos/projeto

git checkout main --force
git pull

sudo chmod +x docker/prod/docker_entrypoint_web.sh
sudo chmod +x docker/prod/docker_entrypoint_queue.sh

cd /var/www/equipamentos

sudo docker compose build
sudo docker compose down
sudo docker compose up -d

sudo chmod +x deploy.sh
