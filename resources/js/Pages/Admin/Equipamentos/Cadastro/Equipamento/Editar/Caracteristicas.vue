<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'
import ValorCaracteristicas from './Componentes/ValorCaracteristicas.vue'

const props = defineProps({
    caracteristicas: Object,
    equipamento: Object,
})

const valores = []
props.caracteristicas.forEach((caracteristica) => {
    valores[`carac-${caracteristica.id}`] = caracteristica.valor
})
const form = useForm(valores)

function submit() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/caracteristicas/salvar`)
}
</script>

<template>
    <AdminLayout titulo="Editar Equipamento">
        <Navegacao class="mb-4 d-flex flex-roll justify-content-center" :equipamento="equipamento" paginaAtual="caracteristicas" />
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-header">
                    <h5 class="card-title">
                        Características
                    </h5>
                </div>
                <div class="card-body p-0">
                    <table class="table table-striped table-hover">
                        <thead>
                            <td>Nome</td>
                            <td>Valor</td>
                        </thead>
                        <tbody>
                            <tr v-for="caracteristica in caracteristicas" :key="caracteristica.id">
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
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
