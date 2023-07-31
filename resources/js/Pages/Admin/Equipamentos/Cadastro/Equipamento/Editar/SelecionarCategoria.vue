<script setup lang="ts">
import { fromPairs, map } from 'lodash'
import { useForm } from '@inertiajs/vue3'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import ValorCaracteristicas from './Componentes/ValorCaracteristicas.vue'

const props = defineProps({
    equipamento: Object,
    caracteristicas: Object,
    categoria: Object,
})

const valores = fromPairs(map(props.caracteristicas.novas, (caracteristica) => [
    `carac-${caracteristica.id}`, caracteristica.valor,
]))

const form = useForm(valores)

function submit() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/categoria/alterar/${props.categoria.id}`)
}
</script>

<template>
    <AdminLayout titulo="Caracteristicas">
        <div v-if="caracteristicas.mantidas?.length > 0" class="card card-default mb-5">
            <div class="card-header">
                <h5 class="card-title">
                    Caracteristicas Mantidas
                </h5>
            </div>
            <div class="card-body">
                <div class="alert alert-info mb-3">
                    Características em comum às duas categorias, não serão alteradas.
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="caracteristica in caracteristicas.mantidas" :key="caracteristica.id">
                            <td>{{ caracteristica.nome }}</td>
                            <td>{{ caracteristica.valor }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div v-if="caracteristicas.removidas?.length > 0" class="card card-default mb-5">
            <div class="card-header">
                <h5 class="card-title">
                    Caracteristicas Removidas
                </h5>
            </div>
            <div class="card-body">
                <div class="alert alert-warning mb-3">
                    <p class="m-0">
                        Caracteristicas que pertencem à <strong>{{ equipamento.categoria.nome }}</strong> e não à <strong>{{ categoria.nome }}</strong>
                    </p>
                    <p class="m-0">
                        Essas características serão removidas
                    </p>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="caracteristica in caracteristicas.removidas" :key="caracteristica.id">
                            <td>{{ caracteristica.nome }}</td>
                            <td>{{ caracteristica.valor }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <form v-if="caracteristicas.novas?.length > 0" @submit.prevent="submit">
            <div class="card card-default mb-5">
                <div class="card-header">
                    <h5 class="card-title">
                        Caracteristicas Adicionadas
                    </h5>
                </div>
                <div class="card-body">
                    <div class="alert alert-warning mb-3">
                        <p class="m-0">
                            Caracteristicas que pertencem à <strong>{{ categoria.nome }}</strong> e não à <strong>{{ equipamento.categoria.nome }}</strong>
                        </p>
                        <p class="m-0">
                            Essas características devem ser cadastradas
                        </p>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="caracteristica in caracteristicas.novas" :key="caracteristica.id">
                                <td>
                                    <label :for="`caracteristica-${caracteristica.id}`"> {{ caracteristica.nome }}</label>
                                    <FormError :error="form.errors['carac-' + caracteristica.id]" />
                                </td>
                                <td>
                                    <ValorCaracteristicas v-model="form['carac-' + caracteristica.id]" :caracteristica="caracteristica" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Alterar Categoria
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
