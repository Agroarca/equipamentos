<script setup lang="ts">
import '../../css/site.css'
import { Head } from '@inertiajs/vue3'
import BaseLayout from './BaseLayout.vue'
import Loader from '@/Componentes/Layout/Loader.vue'
import Header from './Site/Header.vue'
import Footer from './Site/Footer.vue'

const props = defineProps({
    titulo: String,
    noindex: Boolean,
})
</script>

<template>
    <div class="site-layout">
        <Head :title="titulo">
            <meta name="description" head-key="meta-description" content="Encontre o Equipamento Agrícola usado ideal para você expandir seu negócio" />
            <meta v-if="noindex" name="robots" head-key="meta-robots" content="noindex, nofollow" />
            <meta v-else name="robots" head-key="meta-robots" content="index, follow" />
        </Head>
        <BaseLayout>
            <Loader />
            <Header />
            <slot />
            <Footer />
        </BaseLayout>
    </div>
</template>
