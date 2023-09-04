<script setup lang="ts">
import axios from 'axios'
import { ref, reactive } from 'vue'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'

const modal = ref(null)

const props = defineProps({
    categoriaInicial: Object,
    textoBotao: {
        type: String,
        default: 'Selecionar',
    },
    idModal: {
        type: String,
        default: 'modal',
    },
    titulo: {
        type: String,
        default: 'Selecionar categoria',
    },
    permitirSelecionarRaiz: Boolean,
})

const emit = defineEmits<{(e: 'selecionarCategoria', value: Number): void}>()

const state = reactive({
    categoriaAtual: {},
    categorias: [],
})

function atualizarCategorias(categoriaId) {
    loader.show()
    const url = categoriaId ? `/admin/categorias/pesquisar/${categoriaId}` : '/admin/categorias/pesquisar'
    axios.get(url).then((response) => {
        state.categorias = response.data.categorias
        state.categoriaAtual = response.data.categoria
        loader.hide()
    })
}

function show() {
    atualizarCategorias(props.categoriaInicial?.categoria_mae?.id)
    modal.value.show()
}

function selecionarCategoria() {
    emit('selecionarCategoria', state.categoriaAtual?.id)
    modal.value.hide()
}

defineExpose({ show })
</script>

<template>
    <Modal :id="idModal" ref="modal" :title="titulo">
        <div v-if="state.categoriaAtual">
            <button type="button" class="btn btn-primary" @click="atualizarCategorias(state.categoriaAtual.categoria_mae?.id)">
                <i class="fas fa-arrow-left me-1" />
                {{ state.categoriaAtual.categoria_mae?.nome ?? "Categorias" }}
            </button>
        </div>

        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <th>Nome</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <tr v-for="cat in state.categorias" :key="cat.id">
                        <td>{{ cat.nome }}</td>
                        <td>
                            <div class="grade-botoes">
                                <button v-if="cat.id != categoriaInicial?.id" type="button" class="btn btn-primary" @click="atualizarCategorias(cat.id)">
                                    Acessar <i class="fas fa-arrow-right ms-1" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <template #footer>
            <button v-if="permitirSelecionarRaiz || state.categoriaAtual?.id != null" type="button" class="btn btn-primary" @click="selecionarCategoria">
                {{ textoBotao }} {{ state.categoriaAtual?.nome ?? "Categorias" }}
            </button>
        </template>
    </Modal>
</template>
