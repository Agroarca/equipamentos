<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'

const props = defineProps({
    componente: Componente,
})
</script>

<template>
    <div class="componente py-4" :class="{ container: !componente.tela_cheia }">
        <h3 v-if="componente.titulo" class="text-center">
            {{ componente.titulo }}
        </h3>
        <p v-if="componente.subtitulo" class="text-center">
            {{ componente.subtitulo }}
        </p>
        <slot />
    </div>
</template>
