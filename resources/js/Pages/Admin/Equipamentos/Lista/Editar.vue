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
    meta_description: props.lista.meta_description,
})

function submit() {
    form.post(`/admin/lista/${props.lista.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar lista">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="slug">Slug</label>
                        <input id="slug" v-model="form.slug" class="form-control" type="text" required>
                        <FormError :error="form.errors.slug" />
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
    </AdminLayout>
</template>
