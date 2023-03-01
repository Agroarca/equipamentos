<script setup lang="ts">

import Notificacoes from '@/Components/Notificacoes/Notificacoes.vue'
</script>

<template>
    <div class="base-layout">
        <Notificacoes />
        <slot />
    </div>
</template>
