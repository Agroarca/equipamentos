<script setup lang="ts">

const props = defineProps(['equipamento'])

const imagem = {
    url: props.equipamento.imagens[0]?.url,
    descricao: props.equipamento.imagens[0]?.descricao
}
</script>

<template>
    <a class="produto">
        <img class="imagem" :src="imagem.url" :alt="imagem.descricao">
        <span class="titulo">{{ equipamento.titulo }}</span>
        <span class="valor">{{ equipamento.valor }}</span>
        <span class="btn">Quero saber mais!</span>
    </a>
</template>
