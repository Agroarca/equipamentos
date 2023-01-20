FROM php:8.1

WORKDIR /var/www/html

RUN apt update && apt upgrade -y \
    && apt install -y ca-certificates cron curl git tar unzip libpng-dev libxml2-dev libzip-dev \
    && apt clean \
    && docker-php-ext-configure zip \
    && docker-php-ext-install bcmath gd pdo_mysql zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt install -y nodejs \
    && apt clean

RUN npm update -g npm

RUN echo "* * * * * /usr/local/bin/php /var/www/html/artisan schedule:run >> /dev/null 2>&1" >> /var/spool/cron/crontabs/root

EXPOSE 8000

ENTRYPOINT \
  composer install && \
  php artisan cache:clear && \
  php artisan serve --host 0.0.0.0

