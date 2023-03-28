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
        <div class="container-600">
            <Navegacao class="mb-3" :passoAtual="3" :passoCadastro="equipamento.passo_cadastro" :equipamento="equipamento" />
            <h1>
                Descrição
            </h1>
            <div>
                <Editor v-model="form.descricao" class="descricao" />
                <FormError :error="form.errors.descricao" />
            </div>
            <div>
                <button type="button" class="btn btn-primary" @click="salvarDescricao">
                    Atualizar Descrição
                </button>
            </div>
        </div>
    </SiteLayout>
</template>
