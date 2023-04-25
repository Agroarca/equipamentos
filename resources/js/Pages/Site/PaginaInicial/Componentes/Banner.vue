<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import Banner from '@/Models/Marketing/PaginaInicial/Banners/Banner'
import ComponenteBase from './ComponenteBase.vue'

const props = defineProps({
    componente: Componente,
})

let tipo = props.componente.tipo as Banner
</script>

<template>
    <ComponenteBase :componente="componente">
        <picture>
            <source v-if="tipo.url_mobile" :srcset="tipo.url_mobile" media="(max-width: 767.98px)">
            <img class="w-100" :src="tipo.url_desktop" :alt="tipo.descricao">
        </picture>
    </ComponenteBase>
</template>
