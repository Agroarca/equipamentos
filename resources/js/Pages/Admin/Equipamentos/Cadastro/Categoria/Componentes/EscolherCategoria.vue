<script setup lang="ts">

import axios from 'axios'
import { reactive } from 'vue'

const emit = defineEmits<{(e: 'escolherCategoria', value: Number): void}>()
const state = reactive({
    categoriaAtual: {},
    categorias: [],
    arvore: [],
})

function atualizarCategorias(categoriaId?) {
    loader.show()
    const url = categoriaId ? `/categorias/pesquisar/${categoriaId}` : '/categorias/pesquisar'
    axios.get(url).then((response) => {
        state.categorias = response.data.categorias
        state.categoriaAtual = response.data.categoria
        state.arvore = response.data.arvore
        loader.hide()
    })
}

atualizarCategorias()

function escolherCategoria(id) {
    emit('escolherCategoria', id)
}

</script>

<template>
    <div>
        <div class="mb-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <button type="button" class="breadcrumb-item btn btn-link" @click="atualizarCategorias()">
                            Categorias
                        </button>
                    </li>
                    <li v-for="bread in state.arvore" :key="bread.id" class="breadcrumb-item">
                        <button type="button" class="breadcrumb-item btn btn-link" @click="atualizarCategorias(bread.id)">
                            {{ bread.nome }}
                        </button>
                    </li>
                </ol>
            </nav>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <th>Nome</th>
                    <th />
                </thead>
                <tbody>
                    <tr v-for="cat in state.categorias" :key="cat.id">
                        <td>{{ cat.nome }}</td>
                        <td>
                            <button v-if="cat.possui_filhos == 1" type="button" class="btn btn-success me-3" @click="atualizarCategorias(cat.id)">
                                Acessar <i class="fas fa-arrow-right" />
                            </button>
                            <button type="button" class="btn btn-success " @click="escolherCategoria(cat.id)">
                                Escolher <i class="fas fa-arrow-right" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
