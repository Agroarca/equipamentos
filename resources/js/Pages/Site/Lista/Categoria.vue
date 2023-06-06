<script setup lang="ts">
import { provide } from 'vue'
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    categoria: Object,
    filtros: Object,
    filtrosSelecionados: Object,
})

provide('textoCheckLista', 'Apenas nessa categoria')
</script>

<template>
    <Lista :filtros="filtros"
           :filtrosSelecionados="filtrosSelecionados"
           :equipamentos="equipamentos"
           :title="categoria?.nome" />
</template>
