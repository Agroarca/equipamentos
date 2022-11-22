<script setup>

const props = defineProps(['imagens'])
</script>

<template>
    <div class="imagem">
        <img class="card-img-top" :src="imagens[0].url" v-if="imagens.length > 0">
        <img v-else class="card-img-top" src="/public/img/Placeholder.png">
    </div>
</template>
