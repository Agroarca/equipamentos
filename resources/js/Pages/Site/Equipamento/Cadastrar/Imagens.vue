<script setup lang="ts">
import 'cropperjs/dist/cropper.css'
import { Link, useForm } from '@inertiajs/vue3'
import { ref, nextTick } from 'vue'
import Cropper from 'cropperjs'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'

const modal = ref(null)
const elementImg = ref(null)
const props = defineProps({
    equipamento: Object,
    errors: Object,
})

let mostrarEditor = ref(false)
let imagemUrl = ref(null)

let cropper = {
    obj: null,
    options: {},
}

const form = useForm({
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
        responsive: true,
        aspectRatio: 4 / 3,
        viewMode: 0,
        scalable: false,
        movable: false,
        zoomable: false,
        zoomOnWheel: false,
        zoomOnTouch: false,
        ready: readyCropper,
    }
}

function readyCropper() {
    let containerData = this.cropper.getContainerData()
    this.cropper.setCropBoxData({
        width: containerData.width,
        height: containerData.height,
        left: containerData.width,
        top: containerData.height,
    })
}

function startCropper() {
    let image = elementImg.value as HTMLImageElement
    cropper.obj = new Cropper(image, cropper.options)
}

async function saveCrop() {
    const canvas = cropper.obj.getCroppedCanvas({
        width: 800,
        height: 600,
    })

    const blobImg = await new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob)
        }, 'image/png', 1)
    }) as Blob

    let file = new File([blobImg], 'imagem.png', {
        type: 'image/png',
        lastModified: new Date().getTime(),
    })
    form.imagem = file
    imagemUrl.value = URL.createObjectURL(file)
}
function destroyCropper() {
    cropper.obj.destroy()
    cropper.obj = null
}

function inputImagem(e) {
    if (!e.target.files[0]) {
        mostrarEditor.value = false
        imagemUrl.value = null
        destroyCropper()
        return
    }
    if (imagemUrl.value) {
        destroyCropper()
        URL.revokeObjectURL(imagemUrl.value)
    }
    // eslint-disable-next-line prefer-destructuring
    imagemUrl.value = URL.createObjectURL(e.target.files[0])
    nextTick(() => {
        iniciarEdicao()
    })
    mostrarEditor.value = true
}

</script>

<template>
    <SiteLayout titulo="Cadastrar imagem">
        <div class="container-600 cadastrar-equipamento imagens">
            <h2 class="titulo text-center mb-3">
                Imagens do equipamento
            </h2>
            <Navegacao class="mb-3"
                       :passoAtual="2"
                       :passoCadastro="equipamento.passo_cadastro"
                       :equipamento="equipamento"
                       :mostrarCaracteriscas="equipamento.categoria.tem_caracteristicas" />
            <div v-if="errors.imagem" class="row mb-3">
                <div class="alert alert-warning">
                    <label for="erro" class="imagem">{{ errors.imagem }}</label>
                </div>
            </div>
            <div class="my-3">
                <div v-for="imagem in equipamento.imagens" :key="imagem.id" class="imagem">
                    <img :id="'img-' + imagem.id" :src="imagem.url" alt="Imagem do equipamento">
                    <Link :href="`/equipamento/${equipamento.id}/imagens/${imagem.id}/excluir`" class="btn btn-danger">
                        Excluir
                    </Link>
                    <div v-if="equipamento.imagens.length === 0" class="alert alert-warning">
                        <span>Nenhuma imagem adicionada</span>
                    </div>
                </div>
                <div class="mt-3 d-flex justify-content-end">
                    <button type="button" class="btn btn-primary me-3" @click="adicionar()">
                        Adicionar imagem
                    </button>
                    <Link :href="`/equipamento/${equipamento.id}/imagens/continuar`" class="btn btn-primary" :class="{ disabled: equipamento.imagens.length == 0 }">
                        Continuar
                    </Link>
                </div>
            </div>
            <Modal :id="'modal_' + equipamento.id" ref="modal" modalSizeClass="modal-lg modal-fullscreen-sm-down" title="Adicionar imagem">
                <div class="mb-3">
                    <label for="imagem" />
                    <input id="imagem" type="file" name="imagem" accept="image/*" class="form-control form-control-file" @change="inputImagem">
                    <FormError :error="form.errors.imagem" />
                </div>
                <div v-if="mostrarEditor" class="mb-3">
                    <div class="crop-image-container mb-3">
                        <img id="crop-image" ref="elementImg" class="crop-image" alt="crop image" :src="imagemUrl" />
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
