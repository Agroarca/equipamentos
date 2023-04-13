<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'

const props = defineProps({
    statusCadastro: Array,
})

const STATUS_CADASTRO_CRIADO = 0

const form = useForm({
    nome: '',
    marca_id: '',
    status: STATUS_CADASTRO_CRIADO,
})

function submit() {
    form.post('/admin/modelos/salvar')
}

</script>

<template>
    <AdminLayout titulo="Novo Modelo">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="marca_id">Marca</label>
                        <SelectAjax
                            v-model="form.marca_id"
                            placeholder="Selecione uma marca"
                            href="/admin/marcas/pesquisar"
                            :preBusca="true" />
                        <FormError :error="form.errors.marca_id" />
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
                        Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
