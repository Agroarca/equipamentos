<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import FormError from "../../../Components/FormError.vue";
import Caracteristicas from './Caracteristicas/Inicio.vue'

const props = defineProps(['equipamento', 'caracteristicas']);

const form = useForm({
    'id': props.equipamento.id,
    'titulo': props.equipamento.titulo,
    'valor': props.equipamento.valor,
    'ano': props.equipamento.ano,
    'modelo': props.equipamento.modelo.nome,
    'categoria': props.equipamento.categoria.nome,
})

function submit() {
    form.post(route('admin.equipamentos.atualizar', props.equipamento.id))
}
</script>

<template>
    <AdminLayout titulo="Editar Equipamento">
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
                        <label for="modelo">Modelo</label>
                        <input class="form-control" type="text" id="ano" v-model="form.modelo" disabled>
                        <FormError :error="form.errors.modelo" />
                    </div>
                    <div class="mb-3">
                        <label for="categoria">Categoria</label>
                        <input class="form-control" type="text" id="ano" v-model="form.categoria" disabled>
                        <FormError :error="form.errors.categoria" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </form>

        <Caracteristicas :caracteristicas="caracteristicas" :equipamento="equipamento" class="mt-5"></Caracteristicas>
    </AdminLayout>
</template>
