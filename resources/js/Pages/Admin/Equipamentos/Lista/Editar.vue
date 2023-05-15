<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    lista: Object,
})

const form = useForm({
    nome: props.lista.nome,
    slug: props.lista.slug,
})

function submit() {
    form.post(`/admin/lista/${props.lista.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar Lista">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="Slug">Slug</label>
                        <input id="Slug" v-model="form.slug" class="form-control" type="text" required>
                        <FormError :error="form.errors.slug" />
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
