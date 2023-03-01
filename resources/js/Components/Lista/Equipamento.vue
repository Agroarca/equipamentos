<script setup lang="ts">
import Formatacao from '../Util/Formatacao.vue'

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
        <Formatacao class="valor" tipo="preco" :valor="equipamento.valor" />
        <span class="btn">Quero saber mais!</span>
    </a>
</template>
