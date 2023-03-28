<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'
import ListaOpcoes from './Opcoes/ListaOpcoes.vue'
import * as helper from './Componentes/Helper'

const props = defineProps({
    caracteristica: Object,
    tipos: Array,
})
const tituloMinimo = helper.tituloTamanhoMinimo(props.caracteristica.tipo)
const tituloMaximo = helper.tituloTamanhoMaximo(props.caracteristica.tipo)
const mostrarTamanho = helper.mostrarTamanhos(props.caracteristica.tipo)
const mostrarCasasDecimais = helper.mostrarCasasDecimais(props.caracteristica.tipo)
const mostrarOpcoes = helper.mostrarOpcoes(props.caracteristica.tipo)
</script>

<template>
    <AdminLayout titulo="Visualizar Característica">
        <form>
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" class="form-control" type="text" :value="caracteristica.nome" disabled>
                    </div>
                    <div class="mb-3">
                        <label for="tipo">Tipo:</label>
                        <input id="tipo" class="form-control" type="text" :value="tipos[caracteristica.tipo]" disabled>
                    </div>
                    <div class="mb-3 form-check form-switch">
                        <input id="obrigatorio" class="form-check-input" type="checkbox" :checked="caracteristica.obrigatorio" disabled>
                        <label class="form-check-label" for="obrigatorio">Obrigatório</label>
                    </div>
                    <div v-if="mostrarTamanho" class="mb-3">
                        <label for="minimo">{{ tituloMinimo }}</label>
                        <input id="minimo" class="form-control" type="number" :value="caracteristica.minimo" disabled>
                    </div>
                    <div v-if="mostrarTamanho" class="mb-3">
                        <label for="maximo">{{ tituloMaximo }}</label>
                        <input id="maximo" class="form-control" type="number" :value="caracteristica.maximo" disabled>
                    </div>
                    <div v-if="mostrarCasasDecimais" class="mb-3">
                        <label for="quantidade">Quantidade de Casas Decimais</label>
                        <input id="quantidade" class="form-control" type="number" :value="caracteristica.quantidade" disabled>
                    </div>
                </div>
            </div>
        </form>
        <ListaOpcoes v-if="mostrarOpcoes" class="mt-5" :caracteristica="caracteristica" />
    </AdminLayout>
</template>
