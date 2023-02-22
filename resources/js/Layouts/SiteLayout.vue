<script setup>
import '../../css/site.css'
import BaseLayout from './BaseLayout.vue'
import Loader from '@/Components/Loader.vue'
import Header from './Site/Header.vue'
import Footer from './Site/Footer.vue'
</script>

<template>
    <BaseLayout>
        <Loader />
        <Header />
        <slot />
        <Footer />
    </BaseLayout>
</template>
