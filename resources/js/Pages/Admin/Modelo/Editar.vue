<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm } from "@inertiajs/vue3";
import FormError from "../../../Components/FormError.vue";

const props = defineProps(['modelo', 'marcas']);

const form = useForm({
    'nome': props.modelo.nome,
    'marca_id': props.modelo.marca_id,
})

function submit() {
    form.post(route('admin.modelos.atualizar', props.modelo.id))
}
</script>

<template>
    <AdminLayout titulo="Editar Modelo">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input class="form-control" type="text" id="nome" v-model="form.nome" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="marca_id">Marca</label>
                        <select id="marca_id" name="marca_id" class="form-select" v-model="form.marca_id" required>
                            <option v-for="marca in marcas" :key="marca.id" :value="marca.id">{{ marca.nome }}</option>
                        </select>
                        <FormError :error="form.errors.marca_id" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
