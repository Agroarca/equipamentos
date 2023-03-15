<script setup lang="ts">
import '../../css/site.css'
import { Head } from '@inertiajs/vue3'
import BaseLayout from './BaseLayout.vue'
import Loader from '@/Components/Loader.vue'
import Header from './Site/Header.vue'
import Footer from './Site/Footer.vue'

const props = defineProps({
    titulo: String,
})
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
