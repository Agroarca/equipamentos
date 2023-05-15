<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    marca: Object,
    statusCadastro: Array,
})

const form = useForm({
    nome: props.marca.nome,
    status: props.marca.status,
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
                    <div class="mb-3">
                        <label for="status">Status</label>
                        <select id="status" v-model="form.status" class="form-select" required>
                            <option v-for="(status, index) in statusCadastro" :key="index" :value="index">
                                {{ status }}
                            </option>
                        </select>
                        <FormError :error="form.errors.status" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
