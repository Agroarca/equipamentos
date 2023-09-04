<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import axios from 'axios'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SelecionarCategoria from '@/Componentes/Equipamentos/Cadastro/SelecionarCategoria.vue'

const props = defineProps({
    marca: Object,
    statusCadastro: Array,
})

const modal = ref(null)

const form = useForm({
    nome: props.marca.nome,
    status: props.marca.status,
    meta_description: props.marca.meta_description,
})

function submit() {
    form.post(`/admin/marcas/${props.marca.id}/atualizar`)
}

async function selecionarCategoria(categoriaId) {
    await axios.post(`/admin/marca_categoria/${props.marca.id}/adicionar`, {
        categoria_id: categoriaId,
    })
    window.location.reload()
}

function adicionarCategoria() {
    modal.value.show()
}
</script>

<template>
    <AdminLayout titulo="Editar marca">
        <form @submit.prevent="submit">
            <div class="card card-default mb-5">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="status">Status</label>
                        <select id="status" v-model="form.status" class="form-select" required>
                            <option v-for="(status, index) in statusCadastro" :key="index" :value="index">
                                {{ status }}
                            </option>
                        </select>
                        <FormError :error="form.errors.status" />
                    </div>
                    <div class="mb-3">
                        <div class="alert alert-info">
                            <i class="fa-solid fa-info-circle me-1" />
                            <span>A meta description é o texto que descreve o que o usuário vai encontrar na página e aparece na descrição da página no Google.</span><br />
                            <span>Exemplo: "Aqui você encontra os melhores tratores para expandir seu negócio".</span>
                        </div>
                        <label for="meta_description">Meta Description</label>
                        <input id="meta_description" v-model="form.meta_description" class="form-control" type="text">
                        <FormError :error="form.errors.meta_description" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>

        <div class="card card-default mb-5">
            <div class="card-header">
                <h5>Categorias</h5>
            </div>
            <div class="card-body">
                <div class="mb-3 alert alert-info">
                    <i class="fa-solid fa-info-circle me-1" />
                    <span>Caso tenha uma categoria cadastrada essa marca aparecerá somente para produtos dessa categoria e subcategorias.</span>
                    <span>Caso não tenha nenhuma cadastrada a marca aparecerá em todas as categorias</span>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <tbody>
                            <tr v-for="categoria in props.marca.categorias" :key="categoria.id">
                                <td>{{ categoria.nome }}</td>
                                <td>
                                    <Link :href="`/admin/marca_categoria/${props.marca.id}/remover/${categoria.id}`" class="btn btn-danger">
                                        <i class="fa-solid fa-trash me-1" />Remover
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="adicionarCategoria">
                    <i class="fa-solid fa-plus me-1" />Adicionar
                </button>
            </div>
        </div>

        <SelecionarCategoria ref="modal" @selecionarCategoria="selecionarCategoria" />
    </AdminLayout>
</template>
