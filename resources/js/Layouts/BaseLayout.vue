<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";
import Notificacoes from "@/Components/Notificacoes/Notificacoes.vue"

router.on("navigate", (event) => {
    document.body.classList.remove("admin");
    document.body.classList.remove("site");

    if (route().current("admin.*")) {
        document.body.classList.add("admin");
    } else {
        document.body.classList.add("site");
    }
});

</script>

<template>
    <Notificacoes />
    <slot></slot>
</template>
