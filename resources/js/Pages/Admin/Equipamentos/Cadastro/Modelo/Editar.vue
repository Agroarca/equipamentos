<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'

const props = defineProps({
    modelo: Object,
    statusCadastro: Array,
})

const form = useForm({
    nome: props.modelo.nome,
    marca_id: props.modelo.marca_id,
    status: props.modelo.status,
})

function submit() {
    form.post(`/admin/modelos/${props.modelo.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar modelo">
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
                            :placeholder="modelo.marca.nome"
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
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
