<script setup>
    import Editor from '@/Components/Editor/Editor.vue'
    import { useForm } from '@inertiajs/inertia-vue3';

    const props = defineProps(['equipamento'])
    const form = useForm({
        descricao: props.equipamento.descricao
    })

    function atualizarDescricao(){
        form.post(route('admin.equipamentos.atualizarDescricao', props.equipamento.id))
    }
</script>

<template>
    <div class="card card-default">
        <div class="card-header">
            <h5 class="card-title">Descrição</h5>
        </div>
        <div class="card-body p-0">
            <Editor v-model="form.descricao" class="descricao"></Editor>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary" @click="atualizarDescricao">Atualizar Descrição</button>
        </div>
    </div>
</template>
