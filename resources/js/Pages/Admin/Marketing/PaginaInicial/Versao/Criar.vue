<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const form = useForm({
    prioridade: 0,
    descricao: '',
    data_inicio: null,
    data_fim: null,
})

function submit() {
    form.post('/admin/marketing/pagina/inicial/salvar')
}

</script>

<template>
    <AdminLayout titulo="Nova lista">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="prioridade">Prioridade</label>
                        <input id="prioridade" v-model="form.prioridade" class="form-control" type="integer" required>
                        <FormError :error="form.errors.prioridade" />
                    </div>
                    <div class="mb-3">
                        <label for="descricao">Descrição</label>
                        <input id="descricao" v-model="form.descricao" class="form-control" type="text" required>
                        <FormError :error="form.errors.descricao" />
                    </div>
                    <div class="mb-3">
                        <label for="data_inicio">Data Inicial</label>
                        <input id="data_inicio" v-model="form.data_inicio" class="form-control" type="datetime-local">
                        <FormError :error="form.errors.data_inicio" />
                    </div>
                    <div class="mb-3">
                        <label for="data_fim">Data Final</label>
                        <input id="data_fim" v-model="form.data_fim" class="form-control" type="datetime-local">
                        <FormError :error="form.errors.data_fim" />
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
