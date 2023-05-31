#!/bin/bash


# permissão para executar o deploy
cd /var/www/equipamentos
sudo chmod +x deploy.sh

# atualizar git
cd /var/www/equipamentos/projeto
git reset --hard
git pull

sudo chmod +x docker/prod/docker_entrypoint_web.sh
sudo chmod +x docker/prod/docker_entrypoint_queue.sh

# build elastic-apm
cd /var/www/equipamentos/projeto/docker/prod/elastic-apm
sudo docker build -t elastic-apm:latest . --progress plain

# build php
cd /var/www/equipamentos
sudo docker compose build --progress plain

# remove equipamentos
sudo docker compose down

# remove nginx (necessário para atualizar os estáticos)
cd /var/www/nginx
sudo docker compose down

# excluir volume de estáticos
sudo docker volume rm equipamentos-public

# iniciar equipametnos
cd /var/www/equipamentos
sudo docker compose up -d

# iniciar nginx
cd /var/www/nginx
sudo docker compose up -d
