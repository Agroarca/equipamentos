<script setup lang="ts">
import { provide } from 'vue'
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    lista: Object,
    filtros: Object,
    filtrosSelecionados: Object,
})
provide('textoCheckLista', 'Apenas nessa lista')
</script>

<template>
    <Lista
        :equipamentos="equipamentos"
        :titulo="lista?.nome"
        :filtros="filtros"
        :filtrosSelecionados="filtrosSelecionados"
        :metaDescription="lista?.meta_description" />
</template>
