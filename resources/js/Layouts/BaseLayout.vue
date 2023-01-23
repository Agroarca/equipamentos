<script setup>
import { router } from "@inertiajs/vue3";
import setupNotificacoes from '@/Components/Notificacoes';
import { onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";

router.on("navigate", (event) => {
    document.body.classList.remove("admin");
    document.body.classList.remove("site");

    if (route().current("admin.*")) {
        document.body.classList.add("admin");
    } else {
        document.body.classList.add("site");
    }
});

setupNotificacoes()
</script>

<template>
  <slot></slot>
</template>
