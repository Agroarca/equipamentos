<script setup lang="ts">
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    filtros: Object,
    filtrosSelecionados: Object,
    pesquisa: String,
})
</script>

<template>
    <Lista :equipamentos="equipamentos" :filtros="filtros" :filtrosSelecionados="filtrosSelecionados" :title="`${equipamentos.data.length} resultados para ${pesquisa}`" />
</template>
