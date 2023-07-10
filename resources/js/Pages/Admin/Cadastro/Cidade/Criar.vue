<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    estados: Array,
})

const form = useForm({
    nome: '',
    estado_id: null,
})

function submit() {
    form.post('/admin/cidades/salvar')
}

</script>

<template>
    <AdminLayout titulo="Nova Cidade">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="estado_id">Estado</label>
                        <select id="estado_id" v-model="form.estado_id" class="form-select" required>
                            <option v-for="estado in estados" :key="estado.id" :value="estado.id">
                                {{ estado.nome }}
                            </option>
                        </select>
                        <FormError :error="form.errors.estado_id" />
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
