<script setup lang="ts">
import Lista from '../Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
})
let url = new URL(window.location.href)
let pesquisa = url.searchParams.get('pesquisa')
</script>

<template>
    <Lista :equipamentos="equipamentos" :title="`${equipamentos.data.length} Resultados para ${pesquisa}`" />
</template>
