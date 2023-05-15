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
    <AdminLayout titulo="Editar Categoria">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="nome">Categoria Mãe</label>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <input id="nome" class="form-control" type="text" :value="categoria.categoria_mae?.nome" disabled>
                            </div>
                            <div class="ms-2">
                                <button type="button" class="btn btn-primary" @click.prevent="openModal()">
                                    <i class="fas fa-rotate" />
                                    Mover
                                </button>
                            </div>
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
        <AlterarCategoriaMae ref="alterarCategoria" :categoria="categoria" @moverCategoria="moverCategoria" />
    </AdminLayout>
</template>
