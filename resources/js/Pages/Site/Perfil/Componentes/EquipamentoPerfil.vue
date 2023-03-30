<script setup lang="ts">
import Formatacao from '@/Componentes/Layout/Helper/Formatacao.vue';
import { Link } from '@inertiajs/vue3'

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
                Preço: <Formatacao tipo="preco" :valor="equipamento.valor" />
            </span>
            <span class="informacoes">Status: {{ status[equipamento.status] }}</span>
        </div>

        <div v-if="equipamento.status == STATUS_REPROVADO" class="botao">
            <Link :href="`/equipamento/reprovado/${equipamento.id}`" class="btn btn-primary">
                <span>Motivo da Reprovação</span>
            </Link>
        </div>

        <div v-else="equipamento.status == STATUS_APROVADO" class="botao">
            <Link :href="`/conversa/equipamento/${equipamento.id}`" class="btn btn-primary">
                Conversas <span class="badge mensagens" v-if="equipamento.mensagens_nao_visualizadas > 0" >
                    {{ (equipamento.mensagens_nao_visualizadas) }}
                </span>
            </Link>
        </div>

    </div>
</template>
