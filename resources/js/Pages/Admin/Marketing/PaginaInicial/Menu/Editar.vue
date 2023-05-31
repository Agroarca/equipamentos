<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
    menuLink: Object,
})

const form = useForm({
    nome: props.menuLink.nome,
    link: props.menuLink.link,
})

function submit() {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/layout/menu/${props.menuLink.id}/atualizar`)
}

</script>

<template>
    <AdminLayout titulo="Novo link">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="integer" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="link">Link</label>
                        <input id="link" v-model="form.link" class="form-control" type="text" required>
                        <FormError :error="form.errors.link" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa-solid fa-circle-plus me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
