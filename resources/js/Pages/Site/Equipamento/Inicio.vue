<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import { Link } from '@inertiajs/vue3'
import Formatacao from '@/Componentes/Layout/Helper/Formatacao.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Imagens from './Componentes/Imagens.vue'

const props = defineProps({
    equipamento: Object,
})
</script>

<template>
    <SiteLayout :titulo="equipamento.titulo"
                :metaDescription="`Encontre ${equipamento.titulo} no nosso site. Faça negócios seguros e vantajosos. Não perca a chance, encontre seu equipamento ideal!`">
        <div class="container equipamento">
            <div class="d-flex flex-column flex-md-row align-items-md-start">
                <Imagens :imagens="equipamento.imagens" class="col-md-8" />
                <div class="d-flex flex-column col-md-4 ms-md-4 mt-4 mt-md-0">
                    <div class="info">
                        <span class="ano">Ano: {{ equipamento.ano }}</span>
                        <h1 class="titulo">
                            {{ equipamento.titulo }}
                        </h1>
                        <Formatacao class="valor" tipo="preco" :valor="equipamento.valor" />
                        <Link :href="`/conversa/equipamento/${equipamento.id}`" class="botao btn btn-primary">
                            Estou interessado!
                        </Link>
                    </div>
                    <div class="info mt-4">
                        <span>
                            <strong>Anunciado por</strong>
                        </span>
                        <div>
                            {{ equipamento.usuario.nome }}
                        </div>
                        <span>
                            <Link class="btn btn-link" :href="`/anunciante/${equipamento.usuario_id}`">
                                Ver mais <i class="fa-solid fa-arrow-right fa-2xs" />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
            <div class="descricao-header">
                <span>Características</span>
            </div>
            <div v-if="equipamento.caracteristicas.length > 0" class="caracteristicas">
                <div v-for="caracteristica in equipamento.caracteristicas" :key="caracteristica.id" class="caracteristica">
                    <span class="nome">{{ caracteristica.caracteristica.nome }}</span>
                    <span class="valor">{{ caracteristica.valor.valor }}</span>
                </div>
            </div>
            <div class="descricao-header">
                <span>Descrição</span>
            </div>
            <div class="descricao" v-html="equipamento.descricao" />
        </div>
    </SiteLayout>
</template>
