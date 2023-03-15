<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Components/FormError.vue'

const props = defineProps({
    modelo: Object,
    marcas: Object,
})

const form = useForm({
    nome: props.modelo.nome,
    marca_id: props.modelo.marca_id,
})

function submit() {
    form.post(`/admin/modelos/${props.modelo.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar Modelo">
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
                        <select id="marca_id" v-model="form.marca_id" name="marca_id" class="form-select" required>
                            <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
                                {{ marca.nome }}
                            </option>
                        </select>
                        <FormError :error="form.errors.marca_id" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
