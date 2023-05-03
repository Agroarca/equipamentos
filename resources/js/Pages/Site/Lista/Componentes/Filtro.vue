<script setup lang="ts">
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { router } from '@inertiajs/vue3'
import { onMounted } from 'vue'
import { some } from 'lodash'
import Slider from '@/Componentes/Layout/Forms/Slider.vue'
import Filtros from './Classes/Filtros'

const props = defineProps({
    filtrosListagem: Object,
    filtrosSelecionados: Object,
})

let filtros = Filtros.fromObject(props.filtrosListagem)

let url = new URL(window.location.href)
let params = [
    'categoria_id',
    'modelo_id',
    'ano_minimo',
    'ano_maximo',
    'valor_minimo',
    'valor_maximo',
    'marca_id',
]

onMounted(() => {
    if (some(params, (param) => url.searchParams.has(param))) {
        document.getElementById('filtros').classList.add('show')
    }
})

let valoresIniciais = {
    valorMinimo: url.searchParams.get('valor_minimo'),
    valorMaximo: url.searchParams.get('valor_maximo'),
    anoMinimo: url.searchParams.get('ano_minimo'),
    anoMaximo: url.searchParams.get('ano_maximo'),
}

function adicionarFiltros(novosFiltros) {
    for (let filtro in novosFiltros) {
        url.searchParams.set(filtro, novosFiltros[filtro])
    }
    router.visit(url)
}

function selecionarCategoria(id) {
    adicionarFiltros({ categoria_id: id })
}

function selecionarMarca(id) {
    adicionarFiltros({ marca_id: id })
}

function selecionarModelo(id) {
    adicionarFiltros({ modelo_id: id })
}

function selecionarValor(values) {
    let valor = {}
    if (filtros.valor.minimo !== values[0] || url.searchParams.get('valor_minimo')) {
        valor = { valor_minimo: values[0] }
    }
    if (filtros.valor.maximo !== values[1] || url.searchParams.get('valor_maximo')) {
        valor = { ...valor, valor_maximo: values[1] }
    }
    adicionarFiltros(valor)
}

function selecionarAno(values) {
    let ano = {}
    if (filtros.ano.minimo !== values[0] || url.searchParams.get('ano_minimo')) {
        ano = { ano_minimo: values[0] }
    }
    if (filtros.ano.maximo !== values[1] || url.searchParams.get('ano_maximo')) {
        ano = { ...ano, ano_maximo: values[1] }
    }
    adicionarFiltros(ano)
}

function temUmaMarcaSelecionada() {
    if (url.searchParams.get('marca_id') || url.pathname.startsWith('/marca')) {
        return true
    }
    return false
}

function removerFiltro(filtro) {
    url.searchParams.delete(filtro.tipo)
    if (filtro.tipo === 'marca_id') {
        url.searchParams.delete('modelo_id')
    }
    router.visit(url)
}

</script>

<template>
    <div>
        <div class="card mb-3 border-0 filtros">
            <div class="card-header pb-0 bg-white border-0 d-flex flex-wrap">
                <button type="button"
                        class="btn btn-primary me-3 mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target="#filtros"
                        aria-expanded="false"
                        aria-controls="filtros">
                    Filtros
                </button>
                <button
                    v-for="filtro in filtrosSelecionados"
                    :key="filtro.tipo"
                    type="button"
                    class="btn btn-outline-primary me-3 mb-3 filtros-selecionados"
                    @click="removerFiltro(filtro)">
                    {{ filtro.nome }} <i class="fa-solid fa-xmark ms-1" />
                </button>
            </div>
            <div id="filtros" class="card-body pt-0 collapse">
                <div class="filtro-container">
                    <div class="valor mb-3">
                        <h4>Valor</h4>
                        <Slider
                            class="m-2"
                            :minimo="filtros.valor.minimo"
                            :maximo="filtros.valor.maximo"
                            :inicialMinimo="valoresIniciais.valorMinimo"
                            :inicialMaximo="valoresIniciais.valorMaximo"
                            :showInputs="true"
                            inputMask="preco"
                            :values="filtros.valor"
                            @charge="selecionarValor" />
                    </div>
                    <div v-if="filtros.categorias.length >= 1" class="categorias">
                        <h4 class="titulo text-center">
                            Categorias
                        </h4>
                        <div v-for="categoria in filtros.categorias" :key="categoria.id" class="m-2">
                            <button type="button" class="btn btn-link" @click="selecionarCategoria(categoria.id)">
                                {{ categoria.nome }}
                            </button>
                        </div>
                    </div>
                    <div v-if="filtros.marcas.length > 1" class="marcas">
                        <h4 class="titulo text-center">
                            Marcas
                        </h4>
                        <div v-for="marca in filtros.marcas" :key="marca.id" class="m-2">
                            <button type="button" class="btn btn-link" @click="selecionarMarca(marca.id)">
                                {{ marca.nome }} ({{ marca.quantidade }})
                            </button>
                        </div>
                    </div>
                    <div v-if="temUmaMarcaSelecionada() && filtros.modelos.length > 1" class="modelos">
                        <h4 class="titulo text-center">
                            Modelos
                        </h4>
                        <div v-for="modelo in filtros.modelos" :key="modelo.id" class="m-2">
                            <button type="button" class="btn btn-link" @click="selecionarModelo(modelo.id)">
                                {{ modelo.nome }} ({{ modelo.quantidade }})
                            </button>
                        </div>
                    </div>
                    <div class="ano mb-3">
                        <h4>Ano</h4>
                        <Slider
                            class="m-2"
                            :step="1"
                            :minimo="filtros.ano.minimo"
                            :maximo="filtros.ano.maximo"
                            :inicialMinimo="valoresIniciais.anoMinimo"
                            :inicialMaximo="valoresIniciais.anoMaximo"
                            showInputs
                            @charge="selecionarAno" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
