<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import { fromPairs, map } from 'lodash'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import Navegacao from './Componentes/Navegacao.vue'
import Valor from '@/Componentes/Equipamentos/Caracteristicas/Valor.vue'

const props = defineProps({
    caracteristicas: Object,
    equipamento: Object,
})

const valores = fromPairs(map(props.caracteristicas, (caracteristica) => [
    `carac-${caracteristica.id}`, caracteristica.valor,
]))

const form = useForm(valores)

function submit() {
    form.post(`/equipamento/${props.equipamento.id}/caracteristicas/salvar`)
}

</script>

<template>
    <SiteLayout>
        <form @submit.prevent="submit">
            <div class="container-600 cadastrar-equipamento caracteristicas">
                <h2 class="titulo text-center mb-3">
                    Caracteristicas do equipamento
                </h2>
                <Navegacao class="mb-3 display-block" :passoAtual="4" :passoCadastro="equipamento.passo_cadastro" :equipamento="equipamento" :mostrarCaracteriscas="true" />
                <table class="table table-hover mt-3 display-block">
                    <tbody>
                        <tr v-for="caracteristica in caracteristicas" :key="caracteristica.id">
                            <td>
                                <label :for="`caracteristica-${caracteristica.id}`">
                                    {{ caracteristica.nome }}
                                    <span v-if="!caracteristica.obrigatorio" class="opcional"> (Opcional)</span>
                                </label>
                                <FormError :error="form.errors['carac-' + caracteristica.id]" />
                            </td>
                            <td>
                                <Valor v-model="form['carac-' + caracteristica.id]" :caracteristica="caracteristica" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </SiteLayout>
</template>
