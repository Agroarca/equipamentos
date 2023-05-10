# Links Úteis

[Link para instalação](https://marbled-sky-376.notion.site/Prepara-o-do-ambiente-Equipamentos-2f01d665e2c749bb8a747aed4e53ef54)

[Comandos Úteis](https://marbled-sky-376.notion.site/Comandos-teis-Equipamentos-4c698877cc554500862f135411572419)

[Diretrizes de Programação](https://marbled-sky-376.notion.site/Diretrizes-de-programa-o-b33a13e75d074dffbd73a9a7b2c39be0)


## Documentações

[Laravel](https://laravel.com/docs/10.x)

[VueJS](https://vuejs.org/guide/introduction.html)

[InertiaJS](https://inertiajs.com/)

[Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

[Font Awesome](https://fontawesome.com/search)

## Referências

[Layout Desktop](https://www.figma.com/file/bdkSbSg8o0Le6LIqftVSnl/AgroArca---Pilati---Desktop-KIT-UI---Entrega)

[Layout Mobile](https://www.figma.com/file/OIUAXTc9iZXZLAwndWiLFs/AgroArca---Pilati---Mobile-KIT-UI---Entrega)

# Comandos úteis

Limpar branchs antigas do github:

```
git branch --merged | egrep -v "(^\*|main)" | xargs git branch -d
```

Migrar e voltar migrações:

```
php artisan migrate
php artisan migrate:rollback
```

Checks antes do PR

```
npm run build && npm run eslint && vendor/bin/phpcs && ./container.sh php artisan test
```
