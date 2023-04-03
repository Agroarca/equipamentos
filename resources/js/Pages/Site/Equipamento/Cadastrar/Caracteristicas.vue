<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Navegacao from './Componentes/Navegacao.vue'
import Valor from '@/Componentes/Equipamentos/Caracteristicas/Valor.vue'

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
            <div class="container-600 cadastrar-equipamento">
                <h2 class="titulo text-center mb-3">
                    Caracteristicas do Equipamento
                </h2>
                <Navegacao class="mb-3" :passoAtual="4" :passoCadastro="equipamento.passo_cadastro" :equipamento="equipamento" />
                <table class="table table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Valor</th>
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
