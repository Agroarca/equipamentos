<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import FormError from "../../../Components/FormError.vue";

const props = defineProps(['modelos', 'categorias']);

const form = useForm({
    'titulo': '',
    'valor': '',
    'ano': '',
    'modelo_id': '',
    'categoria_id': '',
})

function submit() {
    form.post(route('admin.equipamentos.salvar'))
}

</script>

<template>
    <AdminLayout titulo="Novo Equipamento">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="titulo">Título</label>
                        <input class="form-control" type="text" id="titulo" v-model="form.titulo" required>
                        <FormError :error="form.errors.titulo" />
                    </div>
                    <div class="mb-3">
                        <label for="valor">Valor</label>
                        <input class="form-control" type="text" id="valor" v-model="form.valor" required>
                        <FormError :error="form.errors.valor" />
                    </div>
                    <div class="mb-3">
                        <label for="ano">Ano</label>
                        <input class="form-control" type="text" id="ano" v-model="form.ano" required>
                        <FormError :error="form.errors.ano" />
                    </div>
                    <div class="mb-3">
                        <label for="modelo_id">Modelo</label>
                        <select id="modelo_id" class="form-select" v-model="form.modelo_id" required>
                            <option v-for="(modelo, index) in modelos" :key="index" :value="index">{{ modelo }}</option>
                        </select>
                        <FormError :error="form.errors.modelo_id" />
                    </div>
                    <div class="mb-3">
                        <label for="categoria_id">Categoria</label>
                        <select id="categoria_id" class="form-select" v-model="form.categoria_id" required>
                            <option v-for="(categoria, index) in categorias" :key="index" :value="index">{{ categoria }}</option>
                        </select>
                        <FormError :error="form.errors.categoria_id" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Criar</button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
