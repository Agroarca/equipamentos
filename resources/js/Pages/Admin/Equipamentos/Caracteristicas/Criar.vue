<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { computed } from '@vue/runtime-core'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import * as helper from './Componentes/Helper'

const props = defineProps({
    categoria: Object,
    tipos: Array,
})
const form = useForm({
    nome: '',
    tipo: null,
    obrigatorio: false,
    minimo: null,
    maximo: null,
    quantidade: null,
})

function submit() {
    form.post(`/admin/categorias/${props.categoria.id}/caracteristicas/salvar`)
}

const tituloMinimo = computed(() => helper.tituloTamanhoMinimo(form.tipo))
const tituloMaximo = computed(() => helper.tituloTamanhoMaximo(form.tipo))
const mostrarTamanho = computed(() => helper.mostrarTamanhos(form.tipo))
const mostrarCasasDecimais = computed(() => helper.mostrarCasasDecimais(form.tipo))

</script>

<template>
    <AdminLayout titulo="Nova característica">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="tipo">Tipo:</label>
                        <select id="tipo" v-model="form.tipo" name="tipo" class="form-select" required>
                            <option v-for="(tipo, index) in tipos" :key="index" :value="index">
                                {{ tipo }}
                            </option>
                        </select>
                        <FormError :error="form.errors.tipo" />
                    </div>
                    <div class="mb-3 form-check form-switch">
                        <input id="obrigatorio" v-model="form.obrigatorio" class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="obrigatorio">Obrigatório</label>
                    </div>
                    <div v-if="mostrarTamanho" class="mb-3">
                        <label for="minimo">{{ tituloMinimo }}</label>
                        <input id="minimo" v-model="form.minimo" class="form-control" type="number">
                        <FormError :error="form.errors.minimo" />
                    </div>
                    <div v-if="mostrarTamanho" class="mb-3">
                        <label for="maximo">{{ tituloMaximo }}</label>
                        <input id="maximo" v-model="form.maximo" class="form-control" type="number">
                        <FormError :error="form.errors.maximo" />
                    </div>
                    <div v-if="mostrarCasasDecimais" class="mb-3">
                        <label for="quantidade">Quantidade de casas decimais</label>
                        <input id="quantidade" v-model="form.quantidade" class="form-control" type="number">
                        <FormError :error="form.errors.quantidade" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-plus-circle pe-1" />Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
