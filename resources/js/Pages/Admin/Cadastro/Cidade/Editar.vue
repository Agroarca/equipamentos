<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    cidade: Object,
    estados: Array,
})

const form = useForm({
    nome: props.cidade.nome,
    estado_id: props.cidade.estado_id,
})

function submit() {
    form.post(`/admin/cidades/${props.cidade.id}/atualizar`)
}
</script>

<template>
    <AdminLayout titulo="Editar cidade">
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
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
