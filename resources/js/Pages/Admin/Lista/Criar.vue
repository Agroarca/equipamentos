<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '../../../Components/FormError.vue'

const form = useForm({
    nome: '',
    slug: '',
})

function submit() {
    form.post('/admin/lista/salvar')
}

</script>

<template>
    <AdminLayout titulo="Nova lista">
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
                        Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
