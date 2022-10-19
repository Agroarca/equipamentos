<script setup>
    import '../../css/site.css'
    import { Link } from "@inertiajs/inertia-vue3";
    import Loader from "@/Components/Loader.vue"
    import Header from "./Site/Header.vue"
    import Footer from "./Site/Footer.vue"
</script>

<template>
    <div>
        <Loader></Loader>
        <Header></Header>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>
