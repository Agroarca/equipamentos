<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'
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
        <div class="container-600 cadastrar-equipamento imagens">
            <h2 class="titulo text-center mb-3">
                Imagens do Equipamento
            </h2>
            <Navegacao class="mb-3" :passoAtual="2" :passoCadastro="equipamento.passo_cadastro" :equipamento="equipamento" />
            <div v-if="errors.imagem" class="row mb-3">
                <div class="alert alert-warning">
                    <label for="erro" class="imagem">{{ errors.imagem }}</label>
                </div>
            </div>
            <div class="my-3">
                <div v-for="imagem in equipamento.imagens" :key="imagem.id" class="imagem">
                    <img :src="imagem.url" :alt="imagem.descricao">
                    <p> {{ imagem.descricao }} </p>
                    <Link :href="`/equipamento/${equipamento.id}/imagens/${imagem.id}/excluir`" class="btn btn-danger">
                        Excluir
                    </Link>
                </div>

                <div v-if="equipamento.imagens.length == 0" class="alert alert-warning">
                    <span>Nenhuma imagem adicionada</span>
                </div>
            </div>
            <div class=" mt-3">
                <button type="button" class="btn btn-primary me-3 mb-3" @click="adicionar()">
                    Adicionar Imagem
                </button>
                <Link :href="`/equipamento/${equipamento.id}/imagens/continuar`" class="btn btn-primary" :class="{ disabled: equipamento.imagens.length == 0 }">
                    Continuar
                </Link>
            </div>
        </div>
        <Modal :id="'modal_' + equipamento.id" ref="modal" title="Adicionar Imagem">
            <div class="mb-3">
                <label for="descricao">Descrição</label>
                <input v-model="form.descricao" type="text" name="descricao" class="form-control" required>
                <FormError :error="form.errors.descricao" />
            </div>
            <div class="mb-3">
                <label for="imagem" />
                <input type="file" name="imagem" class="form-control form-control-file" required @input="form.imagem = $event.target.files[0]">
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
