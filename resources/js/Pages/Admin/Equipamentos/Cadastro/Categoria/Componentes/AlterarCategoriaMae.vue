<script setup lang="ts">
import axios from 'axios'
import { ref, reactive } from 'vue'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'

const modal = ref(null)
const props = defineProps({
    categoria: Object,
})
const emit = defineEmits<{(e: 'moverCategoria', value: Number): void}>()
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
    atualizarCategorias(props.categoria?.categoria_mae?.id)
    modal.value.show()
}

function moverCategoria() {
    emit('moverCategoria', state.categoriaAtual?.id)
    modal.value.hide()
}

defineExpose({ show })
</script>

<template>
    <Modal :id="'modal_' + categoria.id" ref="modal" :title="'Mover ' + categoria.nome">
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
                    <th />
                </thead>
                <tbody>
                    <tr v-for="cat in state.categorias" :key="cat.id">
                        <td>{{ cat.nome }}</td>
                        <td>
                            <button v-if="cat.id != categoria.id" type="button" class="btn btn-primary" @click="atualizarCategorias(cat.id)">
                                Acessar <i class="fas fa-arrow-right" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <template #footer>
            <button type="button" class="btn btn-primary" @click="moverCategoria()">
                Mover para {{ state.categoriaAtual?.nome ?? "Categorias" }}
            </button>
        </template>
    </Modal>
</template>
