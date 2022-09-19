<script setup>
    import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
    <div>
        <p>Layout Site</p>
        <Link :href="route('login')">Login</Link>
        <slot></slot>
    </div>
</template>