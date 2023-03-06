<script setup lang="ts">
import Lista from '@/Components/Lista/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    marca: Object,
})
</script>

<template>
    <Lista :equipamentos="equipamentos" :title="marca?.nome" />
</template>
