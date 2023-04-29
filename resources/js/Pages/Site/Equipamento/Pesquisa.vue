<script setup lang="ts">
import Lista from '../Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    pesquisa: String,
})
</script>

<template>
    <Lista :equipamentos="equipamentos" :title="`${equipamentos.data.length} resultados para ${pesquisa}`" />
</template>
