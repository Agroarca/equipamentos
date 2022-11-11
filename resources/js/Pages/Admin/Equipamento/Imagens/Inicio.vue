<script setup>
import { Link, useForm } from '@inertiajs/inertia-vue3';
import Modal from "@/Components/Admin/Modal.vue";
import { ref } from 'vue';

let modal = ref(null)
const props = defineProps(['equipamento'])

let form = useForm({
    descricao: '',
    imagem: {}
})

function adicionar(){
    modal.value.show()
}

function upload(){
    form.post(route('admin.equipamentos.imagens.adicionar', props.equipamento.id))
    modal.value.hide()
}
</script>

<template>
    <div class="card card-default">
        <div class="card-header">
            <h5 class="card-title">Imagens</h5>
        </div>
        <div class="card-body">
            <div class="row mb-3">
                <button type="button" class="btn btn-primary" @click="adicionar()">Adicionar Imagem</button>
            </div>
            <div class="row">
                <div v-for="imagem in equipamento.imagens" class="col-12 col-lg-6 col-xl-4 mb-3" :key="imagem.id">
                    <img class="card-img-top" :src="imagem.url">
                    <p>{{ imagem.descricao }}</p>
                    <Link :href="route('admin.equipamentos.imagens.delete', [equipamento.id, imagem.id])" class="btn btn-danger">Excluir</Link>
                </div>
                <div v-if="equipamento.imagens.length == 0">
                    <p>Nenhuma imagem adicionada</p>
                </div>
            </div>
        </div>
        <Modal :id="'modal_' + equipamento.id" title="Adicionar Imagem" ref="modal">
            <div class="mb-3">
                <label for="descricao"></label>
                <input type="text" name="descricao" v-model="form.descricao" class="form-control">
            </div>
            <div class="mb-3">
                <label for="imagem"></label>
                <input type="file" name="imagem" @input="form.imagem = $event.target.files[0]" class="form-control-file">
            </div>
            <template #footer>
                <button type="button" class="btn btn-primary" @click="upload()">Adicionar</button>
            </template>
        </Modal>
    </div>
</template>
