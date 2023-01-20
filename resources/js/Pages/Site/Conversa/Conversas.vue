<script setup>
import SiteLayout from '@/Layouts/SiteLayout.vue';

const props = defineProps(['equipamento', 'conversas'])

function getQuantidadeNaoLidas(conversa){
    return conversa.visualizacao[0]?.mensagens_nao_visualizadas ?? 0
}

function getNomeNaoLidas(conversa){
    let naoLidas = getQuantidadeNaoLidas(conversa)


    if(naoLidas == 1){
        return naoLidas + ' mensagem não lida'
    }

    return naoLidas + ' mensagens não lidas'
}

</script>

<template>
    <SiteLayout>
        <div class="container conversas">
            <h2>Conversas de {{ equipamento.titulo }} </h2>

            <div class="lista">
                <div class="conversa" v-for="conversa in conversas.data">
                    <div class="infos">
                        <span class="nome">{{ conversa.usuario.nome }}</span>
                        <span class="mensagens_nao_lidas" v-if="getQuantidadeNaoLidas(conversa) > 0">{{ getNomeNaoLidas(conversa) }}</span>
                    </div>
                    <div class="botao">
                        <a class="btn btn-primary" :href="route('site.conversa', conversa.id)">Acessar</a>
                    </div>
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
