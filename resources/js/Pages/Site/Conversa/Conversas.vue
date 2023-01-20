<script setup>
import SiteLayout from '@/Layouts/SiteLayout.vue';

const props = defineProps(['equipamento', 'conversas'])
</script>

<template>
    <SiteLayout>
        <div class="container conversas">
            <h2>Conversas de {{ equipamento.titulo }} </h2>

            <div class="conversa" v-for="conversa in conversas.data">
                <span class="nome">{{ conversa.usuario.nome }}</span>
                <span class="mensagens_nao_lidas">{{ conversa.visualizacao[0]?.mensagens_nao_visualizadas ?? 0 }} mensagens não lidas</span>
                <span class="ultima_mensagem">{{ conversa.mensagens[0]?.mensagem }}</span>
                <a :href="route('site.conversa', conversa.id)">Acessar</a>
            </div>
        </div>
    </SiteLayout>
</template>
