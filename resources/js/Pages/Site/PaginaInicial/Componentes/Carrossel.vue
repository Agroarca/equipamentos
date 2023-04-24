<script setup lang="ts">
import { Carousel } from 'bootstrap'
import { ref, onMounted } from 'vue'
import CarrosselItem from '@/Models/Marketing/PaginaInicial/Carrossel/CarrosselItem'
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    carrosselItens: Array<CarrosselItem>,
})

const carrosselElement = ref(null)
let carrossel

onMounted(() => {
    carrossel = new Carousel(carrosselElement.value, {
        interval: 5000,
        keyboard: true,
        pause: 'hover',
        ride: 'carousel',
        touch: true,
        wrap: true,
    })
})

function prev() {
    carrossel.prev()
}

function next() {
    carrossel.next()
}
</script>

<template>
    <div id="carrossel-principal" ref="carrosselElement" class="carousel slide">
        <div class="carousel-indicators" v-if="carrosselItens.length > 1">
            <button v-for="(item, index) in carrosselItens"
                    :key="item.id"
                    :data-bs-slide-to="index"
                    :class="{ active: index === 0 }"
                    :aria-current="index === 0"
                    :aria-label="`Item ${index + 1}`"
                    type="button"
                    data-bs-target="#carrossel-principal"
                    @click="carrossel.to(index)" />
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in carrosselItens" :key="item.id" class="carousel-item" :class="{ active: index === 0 }">
                <Link :href="item.link">
                    <picture>
                        <source :srcset="item.url_mobile" media="(max-width: 767.98px)">
                        <img :src="item.url_desktop" :alt="item.descricao">
                    </picture>
                </Link>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" @click="prev" v-if="carrosselItens.length > 1">
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" @click="next" v-if="carrosselItens.length > 1">
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
