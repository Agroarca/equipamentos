<script setup>

const props = defineProps(['imagens'])
</script>

<template>
    <div class="imagem">
        <img v-if="imagens.length > 0" class="card-img-top" :src="imagens[0].url">
        <img v-else class="card-img-top" src="/img/Placeholder.png">
    </div>
</template>
