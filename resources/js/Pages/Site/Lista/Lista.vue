<script setup lang="ts">
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    lista: Object,
})
</script>

<template>
    <Lista :equipamentos="equipamentos" :title="lista?.nome" />
</template>
