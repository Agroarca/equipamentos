<script setup lang="ts">
import { computed } from 'vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Equipamento from './Equipamento.vue'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'
import Filtro from './Filtro.vue'

const props = defineProps({
    equipamentos: Object,
    titulo: String,
    filtros: Object,
    filtrosSelecionados: Object,
    metaDescription: String,
})

let url = new URL(window.location.href)

let temFiltroSelecionado = computed(
    () => props.filtrosSelecionados.length > 0
    || url.searchParams.get('ano_minimo') != null
    || url.searchParams.get('ano_maximo') != null
    || url.searchParams.get('valor_minimo') != null
    || url.searchParams.get('valor_maximo') != null
    || url.searchParams.get('pesquisa') != null,
)

let mostrarFiltros = computed(
    () => temFiltroSelecionado.value || props.equipamentos.data.length > 0,
)

</script>

<template>
    <SiteLayout :titulo="titulo" :noindex="temFiltroSelecionado" :metaDescription="metaDescription">
        <section class="container container-md lista">
            <div class="section-meta">
                <slot name="title">
                    <h2 v-if="titulo" class="section-title">
                        {{ titulo }}
                    </h2>
                </slot>
            </div>

            <Filtro v-if="mostrarFiltros" :filtrosListagem="filtros" :filtrosSelecionados="filtrosSelecionados" />

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
