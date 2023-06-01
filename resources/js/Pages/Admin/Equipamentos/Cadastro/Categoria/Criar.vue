<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    categoriaMae: Object,
})

const form = useForm({
    nome: '',
    categoria_mae_id: props.categoriaMae?.id,
})

function submit() {
    form.post('/admin/categorias/salvar')
}

</script>

<template>
    <AdminLayout titulo="Nova Categoria">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="categoria_mae">Categoria Mãe: </label>
                        <input id="categoria_mae" class="form-control" type="text" :value="categoriaMae?.nome" disabled>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa-solid fa-circle-plus me-1" /> Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
