<script setup lang="ts">
import Lista from '@/Components/Lista/Lista.vue'

const props = defineProps(['equipamentos', 'categoria'])
</script>

<template>
    <Lista :equipamentos="equipamentos" :title="categoria?.nome" />
</template>
