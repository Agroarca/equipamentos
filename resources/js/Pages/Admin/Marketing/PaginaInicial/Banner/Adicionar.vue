<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
})

const form = useForm({
    titulo: '',
    subtitulo: '',
    tela_cheia: false,
    link: '',
    descricao: '',
    imagem_desktop: null,
    imagem_mobile: null,
})

function submit() {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/layout/banner/salvar`)
}
</script>

<template>
    <AdminLayout titulo="Nova Grade de Imagens">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="titulo">Título <span class="opcional">(Opcional)</span></label>
                        <input id="titulo" v-model="form.titulo" class="form-control" type="text">
                        <FormError :error="form.errors.titulo" />
                    </div>
                    <div class="mb-3">
                        <label for="subtitulo">Subtítulo <span class="opcional">(Opcional)</span></label>
                        <input id="subtitulo" v-model="form.subtitulo" class="form-control" type="text">
                        <FormError :error="form.errors.subtitulo" />
                    </div>
                    <div class="mb-3 form-check">
                        <label for="tela_cheia">Tela cheia</label>
                        <input v-model="form.tela_cheia" name="tela_cheia" :checked="form.tela_cheia" class="form-check-input" type="checkbox">
                        <FormError :error="form.errors.tela_cheia" />
                    </div>
                    <div class="mb-3">
                        <label for="link">Link</label>
                        <input id="link" v-model="form.link" class="form-control" type="text">
                        <FormError :error="form.errors.link" />
                    </div>
                    <div class="mb-3">
                        <div class="alert alert-info mb-0">
                            <span>A descrição da imagem é usada por Leitores de Tela para informar a Deficientes Visuais o conteúdo da imagem</span>
                        </div>
                        <label for="descricao">Descrição da Imagem</label>
                        <input id="descricao" v-model="form.descricao" class="form-control" type="text" required>
                        <FormError :error="form.errors.descricao" />
                    </div>
                    <div class="mb-3">
                        <div class="alert alert-info mb-0">
                            <span>A Imagem Desktop do banner deve ter largura mínima de 1500px</span>
                        </div>
                        <label for="imagem_desktop">Imagem Desktop</label>
                        <input id="imagem_desktop" class="form-control" type="file" required @input="form.imagem_desktop = $event.target.files[0]">
                        <FormError :error="form.errors.imagem_desktop" />
                    </div>
                    <div class="mb-3">
                        <div class="alert alert-info mb-0">
                            <p class="m-0">
                                A Imagem Mobile do banner deve ter largura mínima de 500px
                            </p>
                            <p class="m-0">
                                Caso não seja cadastrada uma imagem Mobile, a imagem Desktop será utilizada
                            </p>
                        </div>
                        <label for="imagem_mobile">Imagem Mobile <span class="opcional">(Opcional)</span></label>
                        <input id="imagem_mobile" class="form-control" type="file" @input="form.imagem_mobile = $event.target.files[0]">
                        <FormError :error="form.errors.imagem_mobile" />
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary me-2" type="submit">
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
