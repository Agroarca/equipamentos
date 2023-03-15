<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Components/FormError.vue'

const props = defineProps({
    marca: Object,
})

const form = useForm({
    nome: props.marca.nome,
})

function submit() {
    form.post(`/admin/marcas/${props.marca.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar Marca">
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
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
