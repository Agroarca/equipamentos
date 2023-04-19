<script setup lang="ts">
import 'cropperjs/dist/cropper.css'
import { Link, useForm } from '@inertiajs/vue3'
import { ref, nextTick } from 'vue'
import Cropper from 'cropperjs'
import Modal from '@/Componentes/Layout/Modal.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'

const modal = ref(null)
const props = defineProps({
    equipamento: Object,
    errors: Object,
})

let imagemInput = ref(null)
let mostrarEditor = ref(false)
let imagemUrl = ref(null)

let cropper = {
    obj: null,
    width: 800,
    height: 600,
    options: {},
}

const form = useForm({
    descricao: '',
    imagem: {},
})

function adicionar() {
    modal.value.show()
}
async function upload() {
    await saveCrop()
    form.post(`/equipamento/${props.equipamento.id}/imagens/salvar`, {
        onSuccess: () => {
            modal.value.hide()
        },
    })
}

function iniciarEdicao() {
    configureCropper()
    nextTick(() => {
        startCropper()
    })
}

function configureCropper() {
    cropper.options = {
        aspectRatio: 4 / 3,
        viewMode: 3,
        zoomable: false,
        scalable: false,
        zoomOnWheel: false,
        zoomOnTouch: false,
        minCanvasWidth: 800,
        ready: readyCropper,
    }
}

function readyCropper() {
    let containerData = this.cropper.getContainerData()
    this.cropper.setCropBoxData({
        width: cropper.width,
        height: cropper.height,
        left: (containerData.width - cropper.width) / 2,
        top: (containerData.height - cropper.height) / 2,
    })
}

function startCropper() {
    let image = <HTMLImageElement>document.getElementById('crop-image')
    cropper.obj = new Cropper(image, cropper.options)
}

async function saveCrop() {
    const canvas = cropper.obj.getCroppedCanvas({
        width: cropper.width,
        height: cropper.height,
    })
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png', 1)) as Blob;
    let file = new File([blob], 'imagem.png', {
                type: 'image/png',
                lastModified: new Date().getTime(),
            })
    console.log(file)
    form.imagem = file
    imagemInput.value = file
    imagemUrl.value = URL.createObjectURL(file)
}
function destroyCropper() {
        cropper.obj.destroy()
        cropper.obj = null;
    }

function inputImagem(e) {
    console.log(e.target.files[0])
    if(!e.target.files[0]){
        mostrarEditor.value = false
        imagemInput.value = null
        imagemUrl.value = null
        destroyCropper()
        return
    }
    if(imagemUrl.value){
        destroyCropper()
        URL.revokeObjectURL(imagemUrl.value)
    }
    // eslint-disable-next-line prefer-destructuring
    imagemInput.value = e.target.files[0]
    imagemUrl.value = URL.createObjectURL(e.target.files[0])
    nextTick(() => {
       iniciarEdicao()
    })
    mostrarEditor.value = true
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
                    <img :id="'img-' + imagem.id" :src="imagem.url" :alt="imagem.descricao">
                    <p> {{ imagem.descricao }} </p>
                    <Link :href="`/equipamento/${equipamento.id}/imagens/${imagem.id}/excluir`" class="btn btn-danger">
                        Excluir
                    </Link>
                    <div v-if="equipamento.imagens.length == 0" class="alert alert-warning">
                        <span>Nenhuma imagem adicionada</span>
                    </div>
                </div>
                <div class="mt-3">
                    <button type="button" class="btn btn-primary me-3 mb-3" @click="adicionar()">
                        Adicionar Imagem
                    </button>
                    <Link :href="`/equipamento/${equipamento.id}/imagens/continuar`" class="btn btn-primary" :class="{ disabled: equipamento.imagens.length == 0 }">
                        Continuar
                    </Link>
                </div>
            </div>
            <Modal :id="'modal_' + equipamento.id" ref="modal" class="modal-lg" title="Adicionar Imagem">
                <div class="mb-3">
                    <label for="descricao">Descrição</label>
                    <input v-model="form.descricao" type="text" name="descricao" class="form-control">
                    <FormError :error="form.errors.descricao" />
                </div>
                <div class="mb-3">
                    <label for="imagem" />
                    <input type="file" name="imagem" accept="image/*" class="form-control form-control-file" @change="inputImagem">
                    <FormError :error="form.errors.imagem" />
                </div>
                <div v-if="mostrarEditor" class="mb-3">
                    <div class="crop-image-container mb-3">
                        <img id="crop-image" class="crop-image" ref="imagemRef" alt="crop image" :src="imagemUrl" />
                    </div>
                </div>
                <template #footer>
                    <button type="submit" class="btn btn-primary" @click="upload()">
                        Adicionar
                    </button>
                </template>
            </Modal>
        </div>
    </SiteLayout>
</template>

    <style>
        .crop-image-container .crop-image {
            display: block;
            max-width: 100%;
        }
    </style>
