<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Editor from '@/Componentes/Layout/Editor/Editor.vue'

const props = defineProps({
    equipamento: Object,
})
const form = useForm({
    descricao: props.equipamento.descricao,
})

function atualizarDescricao() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/atualizardescricao`)
}
</script>

<template>
    <div class="card card-default">
        <div class="card-header">
            <h5 class="card-title">
                Descrição
            </h5>
        </div>
        <div class="card-body p-0">
            <Editor v-model="form.descricao" class="descricao" />
        </div>
        <div class="card-footer">
            <button type="button" class="btn btn-primary" @click="atualizarDescricao">
                Atualizar Descrição
            </button>
        </div>
    </div>
</template>
