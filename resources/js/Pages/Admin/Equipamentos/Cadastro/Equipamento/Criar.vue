<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { watch, computed, onMounted, ref } from 'vue'
import axios from 'axios'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Mask from '@/Componentes/Helper/InputMask'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'

const props = defineProps({
    categorias: Object,
})

const elValor = ref(null)

let marca
let modelo

const placeholderModelo = computed(() => (form.marca_id ? 'Selecione um Modelo' : 'Selecione uma marca'))

onMounted(() => {
    Mask.preco(elValor.value)
})

const form = useForm({
    titulo: '',
    valor: '',
    ano: '',
    marca_id: '',
    modelo_id: '',
    categoria_id: '',
})

watch(() => form.marca_id, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        form.modelo_id = ''
    }
})

function submit() {
    loader.show()
    if (!form.marca_id) {
        salvarMarca().then(() => {
            submit()
        }).catch(() => {
            loader.hide()
        })
        return
    }
    if (!form.modelo_id) {
        salvarModelo().then(() => {
            submit()
        }).catch(() => {
            loader.hide()
        })
        return
    }
    form.post('/admin/equipamentos/salvar', { onFinish: () => loader.hide() })
}

function criarNovaMarca(search) {
    marca = search
}

function criarNovoModelo(search) {
    modelo = search
}

function salvarMarca() {
    return axios.post('/admin/marcas/salvar/ajax', {
        nome: marca,
    }).then((response) => {
        form.marca_id = response.data.id
    })
}

function salvarModelo() {
    return axios.post('/admin/modelos/salvar/ajax', {
        nome: modelo,
        marca_id: form.marca_id,
    }).then((response) => {
        form.modelo_id = response.data.id
    })
}

</script>

<template>
    <AdminLayout titulo="Novo Equipamento">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="titulo">Título</label>
                        <input id="titulo" v-model="form.titulo" class="form-control" type="text" required>
                        <FormError :error="form.errors.titulo" />
                    </div>
                    <div class="mb-3">
                        <label for="valor">Valor</label>
                        <input id="valor" ref="elValor" v-model="form.valor" class="form-control" type="text" required>
                        <FormError :error="form.errors.valor" />
                    </div>
                    <div class="mb-3">
                        <label for="ano">Ano</label>
                        <input id="ano" v-model="form.ano" class="form-control" type="text" required>
                        <FormError :error="form.errors.ano" />
                    </div>
                    <div class="mb-3">
                        <label for="marca_id">Marca</label>
                        <SelectAjax
                            v-model="form.marca_id"
                            placeholder="Selecione uma marca"
                            href="/admin/marcas/pesquisar"
                            :criar-dinamica="true"
                            @criarNovaOpcao="criarNovaMarca" />
                        <FormError :error="form.errors.modelo_id" />
                    </div>
                    <div class="mb-3">
                        <label for="marca_id">Modelo</label>
                        <SelectAjax
                            v-model="form.modelo_id"
                            :disabled="!(form.marca_id || marca)"
                            :placeholder="placeholderModelo"
                            :href="`/admin/modelos/pesquisar/${form.marca_id}`"
                            :criar-dinamica="true"
                            @criarNovaOpcao="criarNovoModelo" />
                        <FormError :error="form.errors.modelo_id" />
                    </div>
                    <div class="mb-3">
                        <label for="categoria_id">Categoria</label>
                        <select id="categoria_id" v-model="form.categoria_id" class="form-select" required>
                            <option v-for="(categoria, index) in categorias" :key="index" :value="index">
                                {{ categoria }}
                            </option>
                        </select>
                        <FormError :error="form.errors.categoria_id" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>