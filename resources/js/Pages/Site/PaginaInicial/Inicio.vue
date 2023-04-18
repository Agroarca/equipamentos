<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Versao from '@/Models/Marketing/PaginaInicial/Versao'
import Carrossel from './Componentes/Carrossel.vue'

const props = defineProps({
    versaoPaginaInicial: Object,
})

const versao = new Versao(
    props.versaoPaginaInicial.id,
    props.versaoPaginaInicial.status,
    props.versaoPaginaInicial.prioridade,
    props.versaoPaginaInicial.descricao,
    props.versaoPaginaInicial.data_inicio,
    props.versaoPaginaInicial.data_fim,
    props.versaoPaginaInicial.carrossel_itens,
)

</script>

<template>
    <SiteLayout titulo="Início">
        <div id="pagina-inicial">
            <Carrossel :carrosselItens="versao.carrossel_itens" />
        </div>
    </SiteLayout>
</template>
