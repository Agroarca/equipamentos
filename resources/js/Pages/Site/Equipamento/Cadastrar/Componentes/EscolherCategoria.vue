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
        <div class="titulo text-center mb-4">
            <h3>Selecione uma categoria</h3>
        </div>

        <div v-if="resultados.categorias.length == 0" class="alert alert-warning">
            <span>Nenhuma Categoria Encontrada</span>
        </div>

        <div v-else class="d-flex flex-column gap-3">
            <button v-for="categoria in resultados.categorias" :key="categoria.id" type="button" class="btn btn-secondary" @click="atualizarCategorias(categoria.id)">
                {{ categoria.nome }}
            </button>

            <div class="d-flex flex-row gap-3">
                <button type="button" class="btn btn-secondary" @click="atualizarCategorias(resultados.categorias_mae.id)">
                    Voltar
                </button>
                <button type="button" class="btn btn-primary flex-fill" @click="escolherCategoria(resultados.categoriaAtual.id)">
                    Escolher
                </button>
            </div>
        </div>
    </div>
</template>
