<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import ComponenteBase from './ComponenteBase.vue'
import Grid from '@/Models/Marketing/PaginaInicial/Grid/Grid'

const props = defineProps({
    componente: Componente,
})

let tipo = props.componente.tipo as Grid
</script>

<template>
    <ComponenteBase :componente="componente">
        <div class="grid-imagens" :class="`formato-${tipo.formato}`">
            <picture v-for="imagem in tipo.imagens" :key="imagem.id">
                <source v-if="imagem.url_mobile" :srcset="imagem.url_mobile" media="(max-width: 767.98px)">
                <img class="w-100" :src="imagem.url_desktop" :alt="imagem.descricao">
            </picture>
        </div>
    </ComponenteBase>
</template>
