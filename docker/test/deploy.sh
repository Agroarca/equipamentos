#!/bin/bash

cd /var/www/equipamentos/projeto

git checkout main --force
git pull

sudo chmod +x docker/test/docker_entrypoint_web.sh
sudo chmod +x docker/test/docker_entrypoint_queue.sh

cd /var/www/equipamentos

sudo docker compose build --progress plain
sudo docker compose down
sudo docker compose up -d

sudo chmod +x deploy.sh

cd /var/www/nginx

sudo docker compose restart
