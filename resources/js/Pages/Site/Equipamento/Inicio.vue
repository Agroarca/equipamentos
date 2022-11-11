<script setup>
    import SiteLayout from "@/Layouts/SiteLayout.vue";

    const props = defineProps(['equipamento'])
</script>

<template>
    <SiteLayout>
        <p>equipamento {{ equipamento.titulo }}</p>
    </SiteLayout>
</template>
