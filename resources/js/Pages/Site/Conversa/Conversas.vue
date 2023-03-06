<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'

const props = defineProps({
    equipamento: Object,
    conversas: Object,
})

function getQuantidadeNaoLidas(conversa) {
    return conversa.visualizacao[0]?.mensagens_nao_visualizadas ?? 0
}

function getNomeNaoLidas(conversa) {
    const naoLidas = getQuantidadeNaoLidas(conversa)

    if (naoLidas === 1) {
        return `${naoLidas} mensagem não lida`
    }

    return `${naoLidas} mensagens não lidas`
}

</script>

<template>
    <SiteLayout>
        <div class="container conversas">
            <h2>Conversas de {{ equipamento.titulo }} </h2>

            <div class="lista">
                <div v-for="conversa in conversas.data" :key="conversa.id" class="conversa">
                    <div class="infos">
                        <span class="nome">{{ conversa.usuario.nome }}</span>
                        <span v-if="getQuantidadeNaoLidas(conversa) > 0" class="mensagens_nao_lidas">{{ getNomeNaoLidas(conversa) }}</span>
                    </div>
                    <div class="botao">
                        <Link class="btn btn-primary" :href="`/conversa/${conversa.id}`">
                            Acessar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
