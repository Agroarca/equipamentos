#!/bin/bash

php artisan cache:clear
php artisan route:clear
php artisan config:cache
php artisan view:cache
php artisan migrate --force --isolated
php artisan serve --host 0.0.0.0
