<script setup lang="ts">

const props = defineProps({
    imagens: Object,
})
</script>

<template>
    <div id="carrossel-imagens" class="carousel slide container-imagens">
        <div class="carousel-indicators">
            <button v-for="(imagem, index) in imagens" :key="imagem.id" type="button" data-bs-target="#carrossel-imagens"
                    :data-bs-slide-to="index"
                    :class="{ active: +index == 0 }"
                    :aria-current="+index == 0 ? 'true' : 'false'"
                    :aria-label="`Slide ${index}`" />
        </div>
        <div class="carousel-inner">
            <div v-for="(imagem, index) in imagens" :key="imagem.id" class="carousel-item imagem" :class="{ active: +index == 0 }">
                <picture>
                    <source v-if="imagem.url_secundario !== null" :srcset="imagem.url_secundario" type="image/webp">
                    <img :src="imagem.url" :alt="`Imagem ${index} do equipamento cadastrada pelo anunciante.`" width="800" height="600">
                </picture>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carrossel-imagens" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Voltar</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carrossel-imagens" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Proxima</span>
        </button>
    </div>
</template>
