<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import Banner from '@/Models/Marketing/PaginaInicial/Banners/Banner'
import ComponenteBase from './ComponenteBase.vue'

const props = defineProps({
    componente: Componente,
})

let tipo = props.componente.tipo as Banner

console.log(tipo)
</script>

<template>
    <ComponenteBase :componente="componente">
        <img class="w-100" :src="tipo.url_desktop">
    </ComponenteBase>
</template>
