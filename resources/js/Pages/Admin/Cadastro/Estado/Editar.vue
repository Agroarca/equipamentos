<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    estado: Object,
})

const form = useForm({
    nome: props.estado.nome,
    uf: props.estado.uf,
})

function submit() {
    form.post(`/admin/estados/${props.estado.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar estado">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="uf">UF</label>
                        <input id="uf" v-model="form.uf" class="form-control" type="text" required>
                        <FormError :error="form.errors.uf" />
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
