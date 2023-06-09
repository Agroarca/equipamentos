<script setup lang="ts">

const props = defineProps({
    imagens: Object,
})
</script>

<template>
    <div id="carrosselImagens" class="carousel slide imagem">
        <div class="carousel-indicators">
            <button v-for="(imagem, index) in imagens" :key="imagem.id" type="button" data-bs-target="#carrosselImagens"
                    :data-bs-slide-to="index"
                    :class="{ active: +index == 0 }"
                    :aria-current="+index == 0 ? 'true' : 'false'"
                    :aria-label="`Slide ${index}`" />
        </div>
        <div class="carousel-inner">
            <div v-for="(imagem, index) in imagens" :key="imagem.id" class="carousel-item" :class="{ active: +index == 0 }">
                <img :src="imagem.url" :alt="`Imagem ${index} do Equipamento cadastrada pelo anunciante.`">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carrosselImagens" data-bs-slide="prev">
            <i class="fa-solid fa-angle-left fa-2xl btn-control-carousel" />
            <span class="visually-hidden">Voltar</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carrosselImagens" data-bs-slide="next">
            <i class="fa-solid fa-angle-right fa-2xl btn-control-carousel" />
            <span class="visually-hidden">Proxima</span>
        </button>
    </div>
</template>
