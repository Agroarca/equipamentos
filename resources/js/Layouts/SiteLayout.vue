<script setup lang="ts">
import '../../css/site.css'
import { Head } from '@inertiajs/vue3'
import { provide } from 'vue'
import BaseLayout from './BaseLayout.vue'
import Loader from '@/Componentes/Layout/Loader.vue'
import Header from './Site/Header.vue'
import Footer from './Site/Footer.vue'

const props = defineProps({
    titulo: String,
    lista: Boolean,
})

provide('isLista', props.lista)
</script>

<template>
    <div class="site-layout">
        <Head :title="titulo" />
        <BaseLayout>
            <Loader />
            <Header />
            <slot />
            <Footer />
        </BaseLayout>
    </div>
</template>
