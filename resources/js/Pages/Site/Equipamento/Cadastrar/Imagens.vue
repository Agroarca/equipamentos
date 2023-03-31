<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import Modal from '@/Componentes/Layout/Modal.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'

const modal = ref(null)
const props = defineProps({
    equipamento: Object,
    errors: Object,
})

const form = useForm({
    descricao: '',
    imagem: {},
})

function adicionar() {
    modal.value.show()
}
function upload() {
    form.post(`/equipamento/${props.equipamento.id}/imagens/salvar`, {
        onSuccess: () => {
            modal.value.hide()
        },
    })
}

</script>

<template>
    <SiteLayout titulo="Cadastrar Imagem">
        <div class="container-600 cadastrar-equipamento">
            <h2 class="titulo text-center mb-3">
                Imagens do Equipamento
            </h2>
            <Navegacao class="mb-3" :passoAtual="2" :passoCadastro="equipamento.passo_cadastro" :equipamento="equipamento" />
            <div class="row mb-3">
                <div v-if="errors.imagem" class="alert alert-warning">
                    <label for="erro" class="imagem">{{ errors.imagem }}</label>
                </div>
                <button type="button" class="btn btn-primary" @click="adicionar()">
                    Adicionar Imagem
                </button>
            </div>
            <div class="row">
                <div v-for="imagem in equipamento.imagens" :key="imagem.id" class="col-12 col-lg-6 col-xl-4 mb-3">
                    <img class="card-img-top" :src="imagem.url" :alt="imagem.descricao">
                    <p>{{ imagem.descricao }}</p>
                    <Link :href="`/equipamento/${equipamento.id}/imagens/${imagem.id}/excluir`" class="btn btn-danger">
                        Excluir
                    </Link>
                </div>

                <div v-if="equipamento.imagens.length == 0">
                    <p>Nenhuma imagem adicionada</p>
                </div>
            </div>
            <div>
                <Link :href="`/equipamento/${equipamento.id}/imagens/continuar`" class="btn btn-primary">
                    Continuar
                </Link>
            </div>
        </div>
        <Modal :id="'modal_' + equipamento.id" ref="modal" title="Adicionar Imagem">
            <div class="mb-3">
                <label for="descricao">Descrição</label>
                <input v-model="form.descricao" type="text" name="descricao" class="form-control">
                <FormError :error="form.errors.descricao" />
            </div>
            <div class="mb-3">
                <label for="imagem" />
                <input type="file" name="imagem" class="form-control form-control-file" @input="form.imagem = $event.target.files[0]">
                <FormError :error="form.errors.imagem" />
            </div>
            <template #footer>
                <button type="submit" class="btn btn-primary" @click="upload()">
                    Adicionar
                </button>
            </template>
        </Modal>
    </SiteLayout>
</template>
