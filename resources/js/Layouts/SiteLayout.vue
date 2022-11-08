<script setup>
    import '../../css/site.css'
    import BaseLayout from './BaseLayout.vue';
    import { Link } from "@inertiajs/inertia-vue3";
    import Loader from "@/Components/Loader.vue"
    import Header from "./Site/Header.vue"
    import Footer from "./Site/Footer.vue"
</script>

<template>
    <BaseLayout>
        <Loader></Loader>
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </BaseLayout>
</template>
