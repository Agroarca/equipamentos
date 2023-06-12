<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Editor from '@/Componentes/Layout/Editor/Editor.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    equipamento: Object,
})
const form = useForm({
    descricao: props.equipamento.descricao,
})

function salvarDescricao() {
    form.post(`/equipamento/${props.equipamento.id}/descricao/salvar`)
}
</script>

<template>
    <SiteLayout titulo="Cadastrar Descrição">
        <div class="container-600 cadastrar-equipamento">
            <h2 class="titulo text-center mb-3">
                Descrição do Equipamento
            </h2>
            <Navegacao class="mb-3"
                       :passoAtual="3"
                       :passoCadastro="equipamento.passo_cadastro"
                       :equipamento="equipamento"
                       :mostrarCaracteriscas="equipamento.categoria.tem_caracteristicas" />
            <div class="my-4">
                <Editor v-model="form.descricao" class="descricao" />
                <FormError :error="form.errors.descricao" />
            </div>
            <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-primary" @click="salvarDescricao">
                    Continuar
                </button>
            </div>
        </div>
    </SiteLayout>
</template>
