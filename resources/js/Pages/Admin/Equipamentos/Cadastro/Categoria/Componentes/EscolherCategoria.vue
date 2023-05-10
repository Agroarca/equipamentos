<script setup lang="ts">

import axios from 'axios'
import { reactive } from 'vue'

const emit = defineEmits<{(e: 'escolherCategoria', value: Number): void}>()
const resultados = reactive({
    categoriaAtual: {},
    categorias: [],
    categorias_mae: [],
})

function atualizarCategorias(categoriaId?) {
    loader.show()
    const url = categoriaId ? `/categorias/pesquisar/${categoriaId}` : '/categorias/pesquisar'
    axios.get(url).then((response) => {
        resultados.categorias = response.data.categorias
        resultados.categoriaAtual = response.data.categoria
        resultados.categorias_mae = response.data.categorias_mae
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
                <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                        <button type="button" class="breadcrumb-item btn btn-link" @click="atualizarCategorias()">
                            Categorias
                        </button>
                    </li>
                    <li v-for="categoria in resultados.categorias_mae" :key="categoria.id" class="breadcrumb-item">
                        <button type="button" class="breadcrumb-item btn btn-link" @click="atualizarCategorias(categoria.id)">
                            {{ categoria.nome }}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <th>Nome</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <tr v-for="categoria in resultados.categorias" :key="categoria.id">
                        <td>{{ categoria.nome }}</td>
                        <td>
                            <div class="grade-botoes">
                                <button v-if="categoria.possui_filhos == 1" type="button" class="btn btn-primary me-3" @click="atualizarCategorias(categoria.id)">
                                    Acessar<i class="ms-2 fas fa-arrow-right" />
                                </button>
                                <button type="button" class="btn btn-primary " @click="escolherCategoria(categoria.id)">
                                    Escolher <i class="ms-2 fas fa-arrow-right" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
