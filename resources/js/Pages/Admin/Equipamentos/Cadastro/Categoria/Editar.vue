<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import AlterarCategoriaMae from './Componentes/AlterarCategoriaMae.vue'

const props = defineProps({
    categoria: Object,
})
const alterarCategoria = ref(null)

const form = useForm({
    nome: props.categoria.nome,
    categoria_mae_id: props.categoria.categoria_mae_id,
    meta_description: props.categoria.meta_description,
})

function submit() {
    form.post(`/admin/categorias/${props.categoria.id}/atualizar`)
}

function openModal() {
    alterarCategoria.value.show()
}

function moverCategoria(categoriaId) {
    form.categoria_mae_id = categoriaId
    submit()
}
</script>

<template>
    <AdminLayout titulo="Editar categoria">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="categoria_mae">Categoria mãe</label>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <input id="categoria_mae" class="form-control" type="text" :value="categoria.categoria_mae?.nome" disabled>
                            </div>
                            <div class="ms-2">
                                <button type="button" class="btn btn-primary" @click.prevent="openModal()">
                                    <i class="fas fa-rotate me-1" />
                                    Mover
                                </button>
                            </div>
                        </div>
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
        <AlterarCategoriaMae ref="alterarCategoria" :categoria="categoria" @moverCategoria="moverCategoria" />
    </AdminLayout>
</template>
