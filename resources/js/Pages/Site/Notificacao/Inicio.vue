<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'

defineProps({
    notificacoes: Object,
})

const STATUS_NOTIFICACAO_CRIADO = 0
</script>

<template>
    <SiteLayout titulo="Notificações" noindex>
        <div class="container notificacoes">
            <div class="titulo">
                <h1>Notificações</h1>
            </div>
            <div class="lista-notificacoes">
                <Link v-for="notificacao in notificacoes.data" :key="notificacao.id" :href="`/notificacoes/${notificacao.id}`" class="notificacao link-plain">
                    <span v-if="notificacao.status === STATUS_NOTIFICACAO_CRIADO" class="badge text-bg-warning mb-2">Não lida</span>
                    <h5>{{ notificacao.titulo }}</h5>
                    <p>{{ notificacao.texto }}</p>
                    <span class="btn-link">Clique para acessar</span>
                </Link>
                <div v-if="notificacoes.data.length === 0" class="alert alert-danger" role="alert">
                    Nenhuma notificação encontrada
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
