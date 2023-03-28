<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import Editor from '@/Components/Editor/Editor.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Navegacao from '../Componentes/Navegacao.vue'

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
    <AdminLayout titulo="Editar descrição Equipamento">
        <Navegacao class="mb-4 d-flex flex-roll justify-content-center" :equipamento="equipamento" paginaAtual="descricao" />
        <div class="card card-default">
            <div class="card-header">
                <h5 class="card-title">
                    <label for="descricao">Descrição</label>
                </h5>
            </div>
            <div class="card-body p-0">
                <Editor v-model="form.descricao" name="descricao" class="descricao" />
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary" @click="atualizarDescricao">
                    Atualizar Descrição
                </button>
            </div>
        </div>
    </AdminLayout>
</template>
