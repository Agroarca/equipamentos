<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Components/FormError.vue'
import Valor from '@/Pages/Admin/Equipamento/Componentes/ValorCaracteristicas.vue'
import Navegacao from './Navegacao.vue'

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
    form.post(`/equipamento/${props.equipamento.id}/caracteristicas/salvar`)
}

</script>

<template>
    <SiteLayout>
        <form @submit.prevent="submit">
            <div class="container-600">
                <Navegacao class="mb-3" :passoAtual="4" :passoCadastro="equipamento.passo_cadastro" :equipamento="equipamento" />
                <h1>
                    Características
                </h1>
                <table class="table table-striped table-hover">
                    <thead>
                        <td>Nome</td>
                        <td>Valor</td>
                    </thead>
                    <tbody>
                        <tr v-for="caracteristica in caracteristicas" :key="caracteristica.id">
                            <td>
                                <label :for="`caracteristica-${caracteristica.id}`"> {{ caracteristica.nome }} </label>
                                <FormError :error="form.errors['carac-' + caracteristica.id]" />
                            </td>
                            <td>
                                <Valor v-model="form['carac-' + caracteristica.id]" :caracteristica="caracteristica" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button type="submit" class="btn btn-primary">
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    </SiteLayout>
</template>
