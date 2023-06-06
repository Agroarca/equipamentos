<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Lista from '@/Pages/Site/Lista/Componentes/Lista.vue'

const props = defineProps({
    equipamentos: Object,
    filtros: Object,
    filtrosSelecionados: Object,
    pesquisa: String,
})
</script>

<template>
    <div>
        <Lista :equipamentos="equipamentos"
               :filtros="filtros"
               :filtrosSelecionados="filtrosSelecionados"
               :title="`${equipamentos.data.length} resultados para ${pesquisa}`" />
        <Head>
            <meta name="description" head-key="meta-description" :content="`Resultados da pesquisa para ${pesquisa}`" />
            <meta name="robots" head-key="meta-robots" content="noindex, nofollow" />
        </Head>
    </div>
</template>
