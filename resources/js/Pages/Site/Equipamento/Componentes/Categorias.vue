<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    categorias: Object,
})
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <Link v-for="categoria in categorias" :key="categoria.id" :href="`/categoria/${categoria.id}`" class="breadcrumb-item btn-link ms-2">
                {{ categoria.nome }}
            </Link>
        </ol>
    </nav>
</template>
