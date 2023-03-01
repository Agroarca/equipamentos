<script setup lang="ts">

const props = defineProps({
    equipamento: Object,
})

const imagem = {
    url: props.equipamento.imagens[0]?.url ?? '/img/Placeholder.png',
    descricao: props.equipamento.imagens[0]?.descricao,
}
</script>

<template>
    <a class="produto" :href="route('site.equipamento', equipamento.id)">
        <img class="imagem" :src="imagem.url" :alt="imagem.descricao">
        <span class="titulo flex-fill">{{ equipamento.titulo }}</span>
        <span class="valor">{{ equipamento.valor }}</span>
        <span class="btn">Quero saber mais!</span>
    </a>
</template>
