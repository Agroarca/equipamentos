<script setup lang="ts">

const props = defineProps({
    imagens: Object,
})
</script>

<template>
    <div class="imagem">
        <img v-if="imagens.length > 0" class="card-img-top" :src="imagens[0].url" :alt="imagens[0].descricao">
        <img v-else class="card-img-top" src="/img/Placeholder.png" alt="Foto do Equipamento não cadastrada">
    </div>
</template>
