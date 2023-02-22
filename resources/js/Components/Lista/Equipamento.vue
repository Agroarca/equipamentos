<script setup lang="ts">

const props = defineProps(['equipamento'])
</script>

<template>
    <a class="produto">
        <img class="imagem" :src="equipamento.imagens[0]?.url" alt="{{equipamento.imagens[0]?.descricao}}">
        <span class="titulo">{{ equipamento.titulo }}</span>
        <span class="valor">{{ equipamento.valor }}</span>
        <span class="btn">Quero saber mais!</span>
    </a>
</template>
