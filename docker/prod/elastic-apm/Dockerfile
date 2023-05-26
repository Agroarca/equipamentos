FROM ubuntu:20.04

WORKDIR /app
RUN apt update
RUN DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt install php7.4-dev wget unzip libcurl4-openssl-dev -y

RUN wget https://github.com/elastic/apm-agent-php/archive/refs/tags/v1.8.4.zip
RUN unzip v1.8.4.zip

WORKDIR /app/apm-agent-php-1.8.4/src/ext

RUN phpize && \
    CFLAGS="-std=gnu99" ./configure --enable-elastic_apm && \
    make && \
    make install

WORKDIR /app/apm-agent-php-1.8.4/src
