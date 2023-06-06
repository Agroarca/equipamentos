<script setup lang="ts">
import { provide } from 'vue'
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    marca: Object,
    filtros: Object,
    filtrosSelecionados: Object,
})
provide('textoCheckLista', 'Apenas nessa marca')
</script>

<template>
    <Lista
        :equipamentos="equipamentos"
        :filtros="filtros"
        :filtrosSelecionados="filtrosSelecionados"
        :title="marca?.nome" />
</template>
