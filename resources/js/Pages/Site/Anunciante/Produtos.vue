<script setup lang="ts">
import { provide } from 'vue'
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    filtros: Object,
    filtrosSelecionados: Object,
    anunciante: Object,
})
provide('textoCheckLista', 'Apenas nesse anunciante')
</script>

<template>
    <Lista :filtros="filtros"
           :filtrosSelecionados="filtrosSelecionados"
           :equipamentos="equipamentos"
           :title="`Anúncios de ${anunciante.nome}`" />
</template>
