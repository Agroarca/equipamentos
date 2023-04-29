<script setup lang="ts">
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    marca: Object,
    filtros: Object,
    filtrosSelecionados: Object,
})
</script>

<template>
    <Lista
        :equipamentos="equipamentos"
        :filtros="filtros"
        :filtrosSelecionados="filtrosSelecionados"
        :title="marca?.nome" />
</template>
