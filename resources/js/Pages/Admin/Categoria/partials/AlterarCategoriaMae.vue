<script setup>
import Modal from "@/Components/Admin/Modal.vue";
import axios from "axios";
import { ref, reactive } from "vue";

let modal = ref(null)
const props = defineProps(['categoria'])
const emit = defineEmits(['moverCategoria'])
let state = reactive({
    categoriaAtual: {},
    categorias: []
})

function atualizarCategorias(categoriaId){
    axios.get(route('admin.categorias.pesquisar', categoriaId)).then((response) => {
        state.categorias = response.data.categorias
        state.categoriaAtual = response.data.categoria
    })
}

function show(){
    atualizarCategorias(props.categoria?.categoria_mae?.id)
    modal.value.show()
}

function moverCategoria(){
    emit('moverCategoria', state.categoriaAtual?.id)
    modal.value.hide()
}

defineExpose({show:show})
</script>

<template>
    <Modal :id="'modal_' + categoria.id" :title="'Mover ' + categoria.nome" ref="modal">
        <div v-if="state.categoriaAtual">
            <button type="button" class="btn btn-primary" @click="atualizarCategorias(state.categoriaAtual.categoria_mae?.id)">
                <i class="fas fa-arrow-left me-1"></i>
                {{ state.categoriaAtual.categoria_mae?.nome ?? "Categorias" }}
            </button>
        </div>

        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                    <th>Nome</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="cat in state.categorias" :key="cat.id">
                        <td>{{ cat.nome }}</td>
                        <td>
                            <button type="button" class="btn btn-primary" @click="atualizarCategorias(cat.id)" v-if="cat.id != categoria.id">
                                Acessar <i class="fas fa-arrow-right"></i>
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
