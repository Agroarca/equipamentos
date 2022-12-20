<script setup>
    import SiteLayout from "@/Layouts/SiteLayout.vue"
    import Imagens from './Imagens.vue'

    const props = defineProps(['equipamento'])
</script>

<template>
    <SiteLayout>
        <div class="container equipamento">
            <div class="d-flex flex-column flex-md-row align-items-md-start">
                <Imagens :imagens="equipamento.imagens" class="col-md-8" />
                <div class="info d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0">
                    <span class="ano">Ano: {{ equipamento.ano }}</span>
                    <h1 class="titulo">{{ equipamento.titulo }}</h1>
                    <span class="valor">{{ equipamento.valor }}</span>
                    <a :href="route('site.conversa.equipamento', equipamento.id)" class="botao btn btn-primary">Estou Interessado!</a>
                </div>
            </div>
            <div class="descricao-header">
                <span>Características</span>
            </div>
            <div class="caracteristicas" v-if="equipamento.caracteristicas.length > 0">
                <div class="caracteristica" v-for="caracteristica in equipamento.caracteristicas" :key="caracteristica.id">
                    <span class="nome">{{ caracteristica.caracteristica.nome }}</span>
                    <span class="valor">{{ caracteristica.valor.valor }}</span>
                </div>
            </div>
            <div class="descricao-header">
                <span>Descrição</span>
            </div>
            <div class="descricao" v-html="equipamento.descricao"></div>
        </div>
    </SiteLayout>
</template>
