<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'
import Formatacao from '@/Componentes/Layout/Helper/Formatacao.vue'
import PerfilLayout from './Componentes/PerfilLayout.vue'

const props = defineProps({
    equipamentos: Object,
    status: Array,
})

const STATUS_APROVADO = 2
const STATUS_REPROVADO = 5

</script>

<template>
    <PerfilLayout titulo="Meus Equipamentos" pagina="equipamentos">
        <div class="equipamentos d-flex flex-column flex-fill">
            <Link v-if="equipamentos.data.length == 0" class="link-plain" href="/equipamento/cadastrar">
                <div class="alert alert-danger">
                    Você não possui nenhum equipamento cadastrado. <u>Clique aqui</u> para anunciar!
                </div>
            </Link>
            <div v-for="equipamento in equipamentos.data" :key="equipamento.id" class="equipamento">
                <picture>
                    <source v-if="equipamento.imagens[0]?.url_secundario !== null" :srcset="equipamento.imagens[0]?.url_secundario" type="image/webp">
                    <img class="imagem tamanho-img-equip" width="800" height="600"
                         :src="equipamento.imagens[0]?.url ?? '/img/Placeholder.png'"
                         :alt="equipamento.imagens[0]?.descricao ?? 'Imagem do produto'" />
                </picture>

                <div class="informacoes">
                    <h3>{{ equipamento.titulo }}</h3>
                    <span>Modelo: {{ equipamento.modelo.marca.nome }} / {{ equipamento.modelo.nome }}</span>
                    <span>Preço: <Formatacao tipo="preco" :valor="equipamento.valor" /></span>
                    <span>Status: {{ status[equipamento.status] }}</span>
                </div>

                <Link v-if="equipamento.status == STATUS_REPROVADO"
                      :href="`/equipamento/reprovado/${equipamento.id}`"
                      class="btn btn-primary">
                    <span>Motivo da reprovação</span>
                </Link>

                <Link v-if="equipamento.status !== STATUS_APROVADO"
                      :href="`/equipamento/cadastro/editar/${equipamento.id}`"
                      class="btn btn-primary">
                    Editar
                </Link>

                <Link v-if="equipamento.status === STATUS_APROVADO"
                      :href="`/conversa/equipamento/${equipamento.id}`"
                      class="btn btn-primary">
                    Conversas <span v-if="equipamento.mensagens_nao_visualizadas > 0" class="badge mensagens ms-2">
                        {{ (equipamento.mensagens_nao_visualizadas) }}
                    </span>
                </Link>
            </div>
            <Paginacao :links="equipamentos.links" class="mt-1" />
        </div>
    </PerfilLayout>
</template>
