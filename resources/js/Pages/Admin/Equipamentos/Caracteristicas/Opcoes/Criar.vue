<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    caracteristica: Object,
})

const form = useForm({
    nome: '',
})

function submit() {
    form.post(`/admin/categorias/${props.caracteristica.categoria_id}/caracteristicas/${props.caracteristica.id}/opcoes/salvar`)
}

</script>

<template>
    <AdminLayout titulo="Nova opção">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
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
