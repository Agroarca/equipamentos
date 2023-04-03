<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Formatacao from '@/Componentes/Layout/Helper/Formatacao.vue'

const props = defineProps({
    equipamentos: Object,
    status: Array,
})

const STATUS_APROVADO = 2
const STATUS_REPROVADO = 5

</script>

<template>
    <SiteLayout titulo="Meus Equipamentos">
        <div class="container equipamentos">
            <div v-for="equipamento in equipamentos.data" :key="equipamento.id" class="equipamento">
                <img class="imagem"
                     :src="equipamento.imagens[0]?.url ?? '/img/Placeholder.png'"
                     :alt="equipamento.imagens[0]?.descricao ?? 'Imagem do produto'" />

                <div class="informacoes">
                    <h3>{{ equipamento.titulo }}</h3>
                    <span>Modelo: {{ equipamento.modelo.marca.nome }} / {{ equipamento.modelo.nome }}</span>
                    <span>Preço: <Formatacao tipo="preco" :valor="equipamento.valor" /></span>
                    <span>Status: {{ status[equipamento.status] }}</span>
                </div>

                <Link v-if="equipamento.status == STATUS_REPROVADO"
                      :href="`/equipamento/reprovado/${equipamento.id}`"
                      class="btn btn-primary">
                    <span>Motivo da Reprovação</span>
                </Link>

                <Link v-if="equipamento.status == STATUS_APROVADO"
                      :href="`/conversa/equipamento/${equipamento.id}`"
                      class="btn btn-primary">
                    Conversas <span v-if="equipamento.mensagens_nao_visualizadas > 0" class="badge mensagens">
                        {{ (equipamento.mensagens_nao_visualizadas) }}
                    </span>
                </Link>
            </div>
            <Paginacao :links="equipamentos.links" class="mt-1" />
        </div>
    </SiteLayout>
</template>
