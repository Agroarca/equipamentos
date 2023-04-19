<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'

const props = defineProps({
    componente: Componente,
})
</script>

<template>
    <div class="componente" :class="{ container: !componente.tela_cheia }">
        <h3 v-if="componente.titulo">
            {{ componente.titulo }}
        </h3>
        <p v-if="componente.subtitulo">
            {{ componente.subtitulo }}
        </p>
        <slot />
    </div>
</template>
