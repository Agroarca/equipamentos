<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'

const props = defineProps({
    componente: Componente,
})
</script>

<template>
    <div class="componente" :class="{ container: !componente.tela_cheia }">
        <h2 v-if="componente.titulo" class="text-center titulo">
            {{ componente.titulo }}
        </h2>
        <p v-if="componente.subtitulo" class="text-center subtitulo">
            {{ componente.subtitulo }}
        </p>
        <slot />
    </div>
</template>
