<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import Valor from './Valor.vue'
import FormError from "../../../../Components/FormError.vue";
const props = defineProps(['caracteristicas', 'equipamento'])

let valores = [];
for(let caracteristica of props.caracteristicas){
    valores['carac-' + caracteristica.id] = caracteristica.valor
}
const form = useForm(valores);

function submit(){

    form.post(route('admin.equipamentos.caracteristicas.salvar', props.equipamento.id))
}
</script>

<template>
    <form @submit.prevent="submit">
        <div class="card card-default">
            <div class="card-header">
                <h5 class="card-title">Características</h5>
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
                                {{ caracteristica.nome }}
                                <FormError :error="form.errors['carac-' + caracteristica.id]"/>
                            </td>
                            <td>
                                <Valor :caracteristica="caracteristica" v-model="form['carac-' + caracteristica.id]"></Valor>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </div>
    </form>
</template>
