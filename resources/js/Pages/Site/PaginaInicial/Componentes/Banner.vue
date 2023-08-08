<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import Banner from '@/Models/Marketing/PaginaInicial/Banners/Banner'
import ComponenteBase from './ComponenteBase.vue'

const props = defineProps({
    componente: Componente,
})

let banner = props.componente.tipo as Banner
</script>

<template>
    <ComponenteBase :componente="componente">
        <Link :href="banner.link">
            <picture>
                <source v-if="banner.url_mobile_secundario" :srcset="banner.url_mobile_secundario" type="image/webp" media="(max-width: 767.98px)">
                <source v-if="banner.url_mobile" :srcset="banner.url_mobile" media="(max-width: 767.98px)">
                <source v-if="banner.url_desktop_secundario" type="image/webp" :srcset="banner.url_desktop_secundario">
                <img class="w-100" :src="banner.url_desktop" :alt="banner.descricao">
            </picture>
        </Link>
    </ComponenteBase>
</template>
