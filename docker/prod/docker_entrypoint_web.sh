#!/bin/bash

echo "newrelic.license=${NEWRELIC_LICENSE}" > /usr/local/etc/php/conf.d/newrelic-key.ini

php artisan cache:clear
php artisan route:clear
php artisan config:cache
php artisan view:cache
php artisan migrate --force --isolated
php-fpm
