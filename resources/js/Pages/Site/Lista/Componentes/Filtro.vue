<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import SliderRanger from '@/Componentes/Layout/Forms/SliderRanger.vue'
import Filtros from './Classes/Filtros'

const props = defineProps({
    filtrosListagem: Object,
    filtrosSelecionados: Object,
})

let filtros = Filtros.fromObject(props.filtrosListagem)

let url = new URL(window.location.href)

let valoresIniciaisPreco = [
    url.searchParams.get('valor_minimo'),
    url.searchParams.get('valor_maximo'),
]

let valoresIniciaisAno = [
    url.searchParams.get('ano_minimo'),
    url.searchParams.get('ano_maximo'),
]

function visitarCategoria(id) {
    url.searchParams.set('categoria_id', id)
    router.visit(url)
}

function visitarMarca(id) {
    url.searchParams.set('marca_id', id)
    router.visit(url)
}

function visitarModelo(id) {
    url.searchParams.set('modelo_id', id)
    router.visit(url)
}

function visitarValor(values) {
    url.searchParams.set('valor_minimo', values[0])
    url.searchParams.set('valor_maximo', values[1])
    router.visit(url)
}

function visitarAno(values) {
    url.searchParams.set('ano_minimo', values[0])
    url.searchParams.set('ano_maximo', values[1])
    router.visit(url)
}

function temUmaMarcaSelecionada() {
    if (url.searchParams.get('marca_id')) {
        return true
    }
    return false
}

function RemoverFiltro(filtro) {
    url.searchParams.delete(filtro.tipo)
    if (filtro.tipo === 'marca_id') {
        url.searchParams.delete('modelo_id')
    }
    router.visit(url)
}

</script>

<template>
    <div>
        <div class="mb-3">
            <h2 class="mb-4">
                Filtros
            </h2>
            <div class="d-flex">
                <span v-for="filtro in filtrosSelecionados" :key="filtro.tipo" class="badge m-1">{{ filtro.nome }}
                    <button type="button" class="btn filtroSel" @click="RemoverFiltro(filtro)">
                        <i class="fa-solid fa-xmark fa-2xs" />
                    </button>
                </span>
            </div>
        </div>
        <div class="filtro-container">
            <div class="valor mb-3">
                <h4>Valor</h4>
                <SliderRanger
                    class="mb-2 w-75"
                    :minimo="filtros.valor.minimo"
                    :maximo="filtros.valor.maximo"
                    :inicialMinimo="valoresIniciaisPreco[0]"
                    :inicialMaximo="valoresIniciaisPreco[1]"
                    :showInputs="true"
                    inputMask="preco"
                    :values="filtros.valor"
                    @charge="visitarValor" />
            </div>
            <div v-if="filtros.categorias.length >= 1" class="categorias">
                <h4 class="titulo text-center">
                    Todas Categorias
                </h4>
                <div v-for="categoria in filtros.categorias" :key="categoria.id" class="m-2">
                    <button type="button" class="btn btn-link" @click="visitarCategoria(categoria.id)">
                        {{ categoria.nome }}
                    </button>
                </div>
            </div>
            <div v-if="filtros.marcas.length > 1" class="marcas">
                <h4 class="titulo text-center">
                    Marcas
                </h4>
                <div v-for="marca in filtros.marcas" :key="marca.id" class="m-2">
                    <button type="button" class="btn btn-link" @click="visitarMarca(marca.id)">
                        {{ marca.nome }} ({{ marca.quantidade }})
                    </button>
                </div>
            </div>
            <div v-if="temUmaMarcaSelecionada() && filtros.modelos.length > 1" class="modelos">
                <h4 class="titulo text-center">
                    Modelos
                </h4>
                <div v-for="modelo in filtros.modelos" :key="modelo.id" class="m-2">
                    <button type="button" class="btn btn-link" @click="visitarModelo(modelo.id)">
                        {{ modelo.nome }} ({{ modelo.quantidade }})
                    </button>
                </div>
            </div>
            <div class="ano mb-3">
                <h4>Ano</h4>
                <SliderRanger
                    class="mb-2 w-75"
                    :step="1"
                    :minimo="filtros.ano.minimo"
                    :maximo="filtros.ano.maximo"
                    :inicialMinimo="valoresIniciaisAno[0]"
                    :inicialMaximo="valoresIniciaisAno[1]"
                    :showInputs="true"
                    @charge="visitarAno" />
            </div>
        </div>
    </div>
</template>
