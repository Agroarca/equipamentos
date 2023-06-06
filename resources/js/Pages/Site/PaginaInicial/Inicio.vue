<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Versao from '@/Models/Marketing/PaginaInicial/Versao'
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import Carrossel from './Componentes/Carrossel.vue'
import Banner from './Componentes/Banner.vue'
import Grid from './Componentes/Grid.vue'
import ListaProdutos from './Componentes/ListaProdutos.vue'

const props = defineProps({
    versaoPaginaInicial: Object,
})

const versao = new Versao(
    props.versaoPaginaInicial.id,
    props.versaoPaginaInicial.status,
    props.versaoPaginaInicial.prioridade,
    props.versaoPaginaInicial.nome,
    props.versaoPaginaInicial.data_inicio,
    props.versaoPaginaInicial.data_fim,
    props.versaoPaginaInicial.carrossel_itens,
    props.versaoPaginaInicial.componentes,
)

function resolveComponent(componente: Componente) {
    switch (componente.tipo_type) {
    case 'App\\Models\\Marketing\\PaginaInicial\\Grid\\Grid':
        return Grid
    case 'App\\Models\\Marketing\\PaginaInicial\\Banners\\Banner':
        return Banner
    case 'App\\Models\\Marketing\\PaginaInicial\\ListaProdutos\\Lista':
        return ListaProdutos
    default:
        return null
    }
}

</script>

<template>
    <SiteLayout>
        <div class="pagina-inicial">
            <Carrossel :carrosselItens="versao.carrossel_itens" />

            <template v-for="componente in versao.componentes" :key="componente.id">
                <component :is="resolveComponent(componente)" :componente="componente" />
            </template>
        </div>
    </SiteLayout>
</template>
