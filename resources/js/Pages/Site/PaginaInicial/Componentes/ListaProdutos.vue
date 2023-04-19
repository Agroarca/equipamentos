<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import ComponenteBase from './ComponenteBase.vue'

const props = defineProps({
    componente: Componente,
})
</script>

<template>
    <ComponenteBase :componente="componente" />
</template>
