<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Formatacao from '../Util/Formatacao.vue'

const props = defineProps({
    equipamento: Object,
    status: Array,
})

const STATUS_APROVADO = 2
const STATUS_REPROVADO = 5

const imagem = {
    url: props.equipamento.imagens[0]?.url ?? '/img/Placeholder.png',
    descricao: props.equipamento.imagens[0]?.descricao ?? 'Imagem do produto',
}

function getQuantidadeNaoLidas(conversa) {
    return conversa.visualizacao[0]?.mensagens_nao_visualizadas ?? 0
}

</script>

<template>
    <div class="equipamento">
        <div>
            <img class="imagem" :src="imagem.url" :alt="imagem.descricao" />
        </div>

        <div class="infos">
            <span class="nome">{{ equipamento.titulo }}</span>
            <span class="informacoes">Modelo: {{ equipamento.modelo.marca.nome }} / {{ equipamento.modelo.nome }}</span>
            <span class="informacoes">
                Preço: R$ <Formatacao :valor="equipamento.valor" />
            </span>
            <span class="informacoes">Status: {{ status[equipamento.status] }}</span>
        </div>

        <div v-if="equipamento.status == STATUS_REPROVADO" class="botao">
            <Link :href="`/equipamento/reprovado/${equipamento.id}`" class="btn btn-primary">
                <span>Motivo da Reprovação</span>
            </Link>
        </div>

        <div v-else-if="equipamento.status == STATUS_APROVADO" class="infos">
            <span class="informacoes">Mensagens não lidas {{ }}</span>
        </div>

        <div v-else-if="equipamento.status == STATUS_APROVADO" class="botao">
            <Link :href="`/conversa/equipamento/${equipamento.id}`" class="btn btn-primary">
                <span>Conversas</span>
            </Link>
        </div>
    </div>
</template>
