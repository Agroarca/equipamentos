<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import ComponenteBase from './ComponenteBase.vue'
import Grid from '@/Models/Marketing/PaginaInicial/Grid/Grid'

const props = defineProps({
    componente: Componente,
})

let grid = props.componente.tipo as Grid
</script>

<template>
    <ComponenteBase :componente="componente">
        <div class="grid-imagens" :class="`formato-${grid.formato}`">
            <Link v-for="imagem in grid.imagens" :key="imagem.id" :href="imagem.link">
                <picture>
                    <source v-if="imagem.url_mobile" :srcset="imagem.url_mobile" media="(max-width: 767.98px)">
                    <img class="w-100" :src="imagem.url_desktop" :alt="imagem.descricao">
                </picture>
            </Link>
        </div>
    </ComponenteBase>
</template>
