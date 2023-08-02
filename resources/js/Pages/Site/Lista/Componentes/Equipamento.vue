<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Formatacao from '@/Componentes/Layout/Helper/Formatacao.vue'

const props = defineProps({
    equipamento: Object,
})
</script>

<template>
    <Link class="produto" :href="`/equipamento/${equipamento.id}`">
        <picture>
            <source v-if="equipamento.imagens[0]?.url_secundario !== null" :srcset="equipamento.imagens[0]?.url_secundario" type="image/webp">
            <img :src="equipamento.imagens[0]?.url ?? '/img/Placeholder.png'" alt="Imagem do equipamento cadastrada pelo anunciante." width="800" height="600">
        </picture>
        <span class="titulo flex-fill">{{ equipamento.titulo }}</span>
        <Formatacao class="valor" tipo="preco" :valor="equipamento.valor" />
        <span class="btn">Quero saber mais!</span>
    </Link>
</template>
