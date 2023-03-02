#!/bin/bash

composer install
php artisan cache:clear
php artisan route:clear
php artisan queue:listen
