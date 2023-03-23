<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Editor from '@/Components/Editor/Editor.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'

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
        <div class="container-600 card card-default">
            <div class="card-header">
                <h5 class="card-title">
                    Descrição
                </h5>
            </div>
            <div class="card-body p-0">
                <Editor v-model="form.descricao" class="descricao" />
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="salvarDescricao">
                    Atualizar Descrição
                </button>
            </div>
        </div>
    </SiteLayout>
</template>
