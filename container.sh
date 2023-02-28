#!/bin/sh

COMANDO="bash"

if [ $# -ge 1 ]; then
    COMANDO="$@"
fi

sudo docker exec -it equipamentos $COMANDO
