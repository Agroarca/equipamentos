<script setup lang="ts">
import Lista from '@/Components/Lista/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    categoria: Object,
})
</script>

<template>
    <Lista :equipamentos="equipamentos" :title="categoria?.nome" />
</template>
