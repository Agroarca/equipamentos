<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3'
import { ref, onMounted, watch, computed } from 'vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'
import Mask from '@/Componentes/Helper/InputMask'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'

const props = defineProps({
    equipamento: Object,
    statusEquipamentos: Array,
})

const elValor = ref(null)
let marca
let modelo

const placeholderModelo = computed(() => (form.marca_id ? 'Selecione um Modelo' : 'Selecione uma marca'))

onMounted(() => {
    Mask.preco(elValor.value)
})

const form = useForm({
    id: props.equipamento.id,
    titulo: props.equipamento.titulo,
    valor: props.equipamento.valor,
    ano: props.equipamento.ano,
    marca: props.equipamento.modelo.marca.nome,
    modelo: props.equipamento.modelo.nome,
    categoria: props.equipamento.categoria.nome,
    cidade_id: props.equipamento.cidade_id,
    status: props.equipamento.status,
    marca_id: props.equipamento.modelo.marca_id,
    modelo_id: props.equipamento.modelo_id,
})

watch(() => form.marca_id, (newValue, oldValue) => {
    if (newValue !== oldValue) {
        form.modelo_id = ''
    }
})

async function submit() {
    loader.show()
    if (!form.marca_id) {
        await salvarMarca()
    }

    if (!form.modelo_id) {
        await salvarModelo()
    }

    form.post(`/admin/equipamentos/${props.equipamento.id}/atualizar`, { onFinish: () => loader.hide() })
}

function criarNovaMarca(search) {
    form.marca_id = ''
    marca = search
}

function criarNovoModelo(search) {
    form.modelo_id = ''
    modelo = search
}

async function salvarMarca() {
    let response = await axios.post('/admin/marcas/salvar/ajax', {
        nome: marca,
    })

    form.marca_id = response.data.id
}

async function salvarModelo() {
    let response = await axios.post('/admin/modelos/salvar/ajax', {
        nome: modelo,
        marca_id: form.marca_id,
    })

    form.modelo_id = response.data.id
}
</script>

<template>
    <AdminLayout titulo="Editar equipamento">
        <div class="equipamento">
            <Navegacao class="mb-4 d-flex flex-roll justify-content-center" :equipamento="equipamento" paginaAtual="cadastro" />
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
                                :criarDinamica="true"
                                :options="equipamento.modelo.marca_id ? [{ id: equipamento.modelo.marca_id, texto: equipamento.modelo.marca.nome }] : []"
                                preBusca
                                @criarNovaOpcao="criarNovaMarca" />
                            <FormError :error="form.errors.marca" />
                        </div>
                        <div class="mb-3">
                            <label for="modelo_id">Modelo</label>
                            <SelectAjax
                                v-model="form.modelo_id"
                                :disabled="!(form.marca_id || marca)"
                                :placeholder="placeholderModelo"
                                :href="form.marca_id ? `/admin/modelos/pesquisar/${form.marca_id}` : null"
                                :criarDinamica="true"
                                :options="equipamento.modelo_id ? [{ id: equipamento.modelo_id, texto: equipamento.modelo.nome }] : []"
                                preBusca
                                @criarNovaOpcao="criarNovoModelo" />
                            <FormError :error="form.errors.modelo" />
                        </div>
                        <div class="mb-3">
                            <label for="categoria">Categoria</label>
                            <input id="categoria" v-model="form.categoria" class="form-control" type="text" disabled>
                            <FormError :error="form.errors.categoria" />
                        </div>
                        <div class="mb-3">
                            <label for="cidade_id">Cidade</label>
                            <SelectAjax
                                v-model="form.cidade_id"
                                placeholder="Selecione uma cidade"
                                href="/admin/pesquisar/cidade/"
                                :options="equipamento.cidade_id ? [{ id: equipamento.cidade_id, texto: equipamento.cidade.display_name }] : []"
                                preBusca />
                            <FormError :error="form.errors.cidade_id" />
                        </div>
                        <div class="mb-3">
                            <label for="status">Status</label>
                            <select id="status" v-model="form.status" class="form-select" required>
                                <option v-for="(status, index) in statusEquipamentos" :key="index" :value="index">
                                    {{ status }}
                                </option>
                            </select>
                            <FormError :error="form.errors.categoria" />
                        </div>
                        <div class="mb-3">
                            <label for="anunciante">Anunciante</label>
                            <div class="d-flex">
                                <input id="anunciante" :value="equipamento.usuario.nome" class="form-control" type="text" disabled>
                                <Link :href="`/admin/equipamentos/${equipamento.id}/transferir`" class="btn btn-primary ms-2">
                                    Transferir
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">
                            <i class="fa-solid fa-floppy-disk me-1" />Salvar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </AdminLayout>
</template>
