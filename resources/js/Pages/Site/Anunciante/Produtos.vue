<script setup lang="ts">
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    filtros: Object,
    filtrosSelecionados: Object,
    anunciante: Object,
})
</script>

<template>
    <Lista :filtros="filtros"
           :filtrosSelecionados="filtrosSelecionados"
           :equipamentos="equipamentos"
           :title="`Anúncios de ${anunciante.nome}`" />
</template>
