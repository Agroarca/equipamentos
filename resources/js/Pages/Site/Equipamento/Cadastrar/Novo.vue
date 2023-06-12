<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { watch, computed, ref, onMounted } from 'vue'
import axios from 'axios'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'
import Mask from '@/Componentes/Helper/InputMask'

const props = defineProps({
    equipamento: Object,
    categoria: Object,
})

let marca
let modelo

const placeholderModelo = computed(() => (form.marca_id ? 'Selecione um Modelo' : 'Selecione uma Marca'))

const form = useForm({
    id: props.equipamento?.id,
    titulo: props.equipamento?.titulo,
    valor: props.equipamento?.valor,
    ano: props.equipamento?.ano,
    modelo_id: props.equipamento?.modelo?.id,
    marca_id: props.equipamento?.modelo?.marca?.id,
    categoria_id: props.equipamento?.categoria_id ?? props.categoria?.id,
})

watch(() => form.marca_id, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        form.modelo_id = ''
    }
})

const elValor = ref(null)

onMounted(() => {
    Mask.preco(elValor.value)
})

async function submit() {
    loader.show()
    if (!form.marca_id && marca) {
        await salvarMarca()
    }
    if (!form.modelo_id && modelo) {
        await salvarModelo()
    }

    form.post('/equipamento/salvar', { onFinish: () => loader.hide() })
}

function criarNovaMarca(search) {
    marca = search
}

function criarNovoModelo(search) {
    modelo = search
}

async function salvarMarca() {
    try {
        let response = await axios.post('/marca/salvar/ajax', {
            nome: marca,
        })

        form.marca_id = response.data.id
    } catch (error) {
        loader.hide()
        throw error
    }
}

async function salvarModelo() {
    try {
        let response = await axios.post('/modelo/salvar/ajax', {
            nome: modelo,
            marca_id: form.marca_id,
        })

        form.modelo_id = response.data.id
    } catch (error) {
        loader.hide()
        throw error
    }
}

</script>

<template>
    <SiteLayout titulo="Cadastrar Equipamento">
        <div class="container-600 cadastrar-equipamento">
            <h2 class="titulo text-center mb-3">
                Cadastrar Novo Equipamento
            </h2>
            <Navegacao class="mb-3 d-flex justify-content-center" :passoAtual="1" :passoCadastro="equipamento?.passo_cadastro ?? 1" :equipamento="equipamento" />
            <form @submit.prevent="submit">
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
                        v-if="!equipamento?.modelo?.marca"
                        v-model="form.marca_id"
                        placeholder="Selecione uma Marca"
                        href="/pesquisar/marcas"
                        :preBusca="true"
                        :criarDinamica="true"
                        required
                        @criarNovaOpcao="criarNovaMarca" />
                    <input v-else id="ano" :value="equipamento.modelo.marca.nome" class="form-control" type="text" disabled>
                    <FormError :error="form.errors.marca_id" />
                </div>
                <div class="mb-3">
                    <label for="marca_id">Modelo</label>
                    <SelectAjax
                        v-if="!equipamento?.modelo"
                        v-model="form.modelo_id"
                        :disabled="!form.marca_id && !marca"
                        :placeholder="placeholderModelo"
                        :href="form.marca_id ? `/pesquisar/${form.marca_id}/modelos` : null"
                        :criarDinamica="true"
                        required
                        @criarNovaOpcao="criarNovoModelo" />
                    <input v-else id="ano" :value="equipamento.modelo.marca.nome" class="form-control" type="text" disabled>
                    <FormError :error="form.errors.modelo_id" />
                </div>
                <div class="mb-3">
                    <label for="categoria_id">Categoria</label>
                    <input id="ano" :value="categoria?.nome ?? equipamento.categoria.nome" class="form-control" type="text" disabled>
                </div>
                <button type="submit" class="btn btn-primary">
                    Continuar
                </button>
            </form>
        </div>
    </SiteLayout>
</template>
