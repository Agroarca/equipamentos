<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Equipamento from './Equipamento.vue'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'
import Filtro from './Filtro.vue'

const props = defineProps({
    equipamentos: Object,
    title: String,
    filtros: Object,
    filtrosSelecionados: Object,
})
</script>

<template>
    <SiteLayout :titulo="title">
        <section class="container container-md lista">
            <div class="section-meta">
                <slot name="title">
                    <h2 v-if="title" class="section-title">
                        {{ title }}
                    </h2>
                </slot>
            </div>
            <Filtro v-if="filtros.valor.maximo != null" :filtrosListagem="filtros" :filtrosSelecionados="filtrosSelecionados" />
            <div v-if="equipamentos.data.length == 0">
                <div class="alert alert-danger">
                    Nenhum equipamento encontrado
                </div>
            </div>
            <slot>
                <div class="produtos">
                    <template v-for="equipamento in equipamentos.data" :key="equipamento.id">
                        <Equipamento :equipamento="equipamento" />
                    </template>
                </div>
                <Paginacao :links="equipamentos.links" class="mt-5" />
            </slot>
        </section>
    </SiteLayout>
</template>
