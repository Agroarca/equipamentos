#!/bin/bash

composer install
php artisan cache:clear
php artisan route:clear
php artisan serve --host 0.0.0.0
