<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    statusCadastro: Array,
})

const STATUS_CADASTRO_CRIADO = 0

const form = useForm({
    nome: '',
    status: STATUS_CADASTRO_CRIADO,
    meta_description: '',
})

function submit() {
    form.post('/admin/marcas/salvar')
}

</script>

<template>
    <AdminLayout titulo="Nova marca">
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
                        <i class="fas fa-plus-circle pe-1" />Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
