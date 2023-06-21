<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Editor from '@/Componentes/Layout/Editor/Editor.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'

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
    <AdminLayout titulo="Editar descrição equipamento">
        <Navegacao class="mb-4 d-flex flex-roll justify-content-center" :equipamento="equipamento" paginaAtual="descricao" />
        <div class="card card-default">
            <div class="card-header">
                <h5 for="descricao" class="card-title">
                    Descrição
                </h5>
            </div>
            <div class="card-body p-0">
                <Editor v-model="form.descricao" name="descricao" class="descricao" />
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="atualizarDescricao">
                    Atualizar descrição
                </button>
            </div>
        </div>
    </AdminLayout>
</template>
