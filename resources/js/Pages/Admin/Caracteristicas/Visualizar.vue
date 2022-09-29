<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import ListaOpcoes from './Opcoes/ListaOpcoes.vue'
import * as base from './Base';

const props = defineProps(['caracteristica', 'tipos'])
const tituloMinimo = base.tituloTamanhoMinimo(props.caracteristica.tipo)
const tituloMaximo = base.tituloTamanhoMaximo(props.caracteristica.tipo)
const mostrarTamanho = base.mostrarTamanhos(props.caracteristica.tipo)
const mostrarCasasDecimais = base.mostrarCasasDecimais(props.caracteristica.tipo)
const mostrarOpcoes = base.mostrarOpcoes(props.caracteristica.tipo)
</script>

<template>
    <AdminLayout titulo="Visualizar Característica">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input class="form-control" type="text" id="nome" :value="caracteristica.nome" disabled>
                    </div>
                    <div class="mb-3">
                        <label for="tipo">Tipo:</label>
                        <input class="form-control" type="text" id="tipo" :value="tipos[caracteristica.tipo]" disabled>
                    </div>
                    <div class="mb-3 form-check form-switch">
                        <input class="form-check-input" type="checkbox" :checked="caracteristica.obrigatorio" id="obrigatorio" disabled>
                        <label class="form-check-label" for="obrigatorio">Obrigatório</label>
                    </div>
                    <div class="mb-3" v-if="mostrarTamanho">
                        <label for="minimo">{{ tituloMinimo }}</label>
                        <input class="form-control" type="number" id="minimo" :value="caracteristica.minimo" disabled>
                    </div>
                    <div class="mb-3" v-if="mostrarTamanho">
                        <label for="maximo">{{ tituloMaximo }}</label>
                        <input class="form-control" type="number" id="maximo" :value="caracteristica.maximo" disabled>
                    </div>
                    <div class="mb-3" v-if="mostrarCasasDecimais">
                        <label for="quantidade">Quantidade de Casas Decimais</label>
                        <input class="form-control" type="number" id="quantidade" :value="caracteristica.quantidade" disabled>
                    </div>
                </div>
            </div>
        </form>
        <ListaOpcoes v-if="mostrarOpcoes" class="mt-5" :caracteristica="caracteristica"></ListaOpcoes>
    </AdminLayout>
</template>
