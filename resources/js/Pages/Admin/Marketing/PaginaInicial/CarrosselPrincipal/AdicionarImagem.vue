<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
})

const form = useForm({
    ordem: '',
    link: '',
    descricao: '',
    imagem_desktop: {},
    imagem_mobile: {},
})

const submit = () => {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/layout/carrossel/salvar`)
}

</script>

<template>
    <AdminLayout titulo="Adicionar Imagem">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="descricao">Descrição</label>
                        <input id="descricao" v-model="form.descricao" class="form-control" type="text" required>
                        <FormError :error="form.errors.descricao" />
                    </div>
                    <div class="mb-3">
                        <label for="link">Link</label>
                        <input id="link" v-model="form.link" class="form-control" type="text" required>
                        <FormError :error="form.errors.link" />
                    </div>
                    <div class="mb-3">
                        <label for="ordem">Ordem</label>
                        <input id="ordem" v-model="form.ordem" class="form-control" type="number" required>
                        <FormError :error="form.errors.ordem" />
                    </div>
                    <div class="mb-3">
                        <label for="nome_arquivo_desktop">Imagem Desktop</label>
                        <input id="nome_arquivo_desktop" class="form-control" type="file" required @input="form.imagem_desktop = $event.target.files[0]">
                        <FormError :error="form.errors.imagem_desktop" />
                    </div>
                    <div class="mb-3">
                        <label for="nome_arquivo_mobile">Imagem Mobile</label>
                        <input id="nome_arquivo_mobile" class="form-control" type="file" required @input="form.imagem_mobile = $event.target.files[0]">
                        <FormError :error="form.errors.imagem_desktop" />
                    </div>
                </div>
                <div class="card-body">
                    <button type="submit" class="btn btn-primary">
                        Adicionar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
