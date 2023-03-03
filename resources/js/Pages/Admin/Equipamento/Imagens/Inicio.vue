<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import Modal from '@/Components/Admin/Modal.vue'

const modal = ref(null)
const props = defineProps({
    equipamento: Object,
})

const form = useForm({
    descricao: '',
    imagem: {},
})

function adicionar() {
    modal.value.show()
}

function upload() {
    form.post(`/admin/equipamentos/${props.equipamento.id}/imagens/adicionar`)
    modal.value.hide()
}
</script>

<template>
    <div class="card card-default">
        <div class="card-header">
            <h5 class="card-title">
                Imagens
            </h5>
        </div>
        <div class="card-body">
            <div class="row mb-3">
                <button type="button" class="btn btn-primary" @click="adicionar()">
                    Adicionar Imagem
                </button>
            </div>
            <div class="row">
                <div v-for="imagem in equipamento.imagens" :key="imagem.id" class="col-12 col-lg-6 col-xl-4 mb-3">
                    <img class="card-img-top" :src="imagem.url" :alt="imagem.descricao">
                    <p>{{ imagem.descricao }}</p>
                    <Link :href="`/admin/equipamentos/${equipamento.id}/imagens/${imagem.id}/deletar`" class="btn btn-danger">
                        Excluir
                    </Link>
                </div>
                <div v-if="equipamento.imagens.length == 0">
                    <p>Nenhuma imagem adicionada</p>
                </div>
            </div>
        </div>
        <Modal :id="'modal_' + equipamento.id" ref="modal" title="Adicionar Imagem">
            <div class="mb-3">
                <label for="descricao" />
                <input v-model="form.descricao" type="text" name="descricao" class="form-control">
            </div>
            <div class="mb-3">
                <label for="imagem" />
                <input type="file" name="imagem" class="form-control-file" @input="form.imagem = $event.target.files[0]">
            </div>
            <template #footer>
                <button type="button" class="btn btn-primary" @click="upload()">
                    Adicionar
                </button>
            </template>
        </Modal>
    </div>
</template>
