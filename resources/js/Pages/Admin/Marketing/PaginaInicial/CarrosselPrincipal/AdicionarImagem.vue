<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
})

const form = useForm({
    link: '',
    descricao: '',
    imagem_desktop: {},
    imagem_mobile: {},
})

const submit = () => {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/layout/carrossel/salvar`)
}

</script>

<template>
    <AdminLayout titulo="Adicionar imagem">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <div class="alert alert-info mb-0">
                            <span>A descrição da imagem é usada por leitores de tela para informar a <strong>Deficientes Visuais</strong> o conteúdo da imagem</span>
                        </div>
                        <label for="descricao">Descrição</label>
                        <input id="descricao" v-model="form.descricao" class="form-control" type="text" required>
                        <FormError :error="form.errors.descricao" />
                    </div>
                    <div class="mb-3">
                        <label for="link">Link</label>
                        <input id="link" v-model="form.link" class="form-control" type="text" required>
                        <FormError :error="form.errors.link" />
                    </div>
                    <div class="mb-3">
                        <div class="alert alert-info mb-0">
                            <p class="m-0">
                                A imagem desktop deve ter uma proporção de 3/1 e largura mínima de 1500px
                            </p>
                            <p class="m-0">
                                Exemplo: 1920px x 640px
                            </p>
                        </div>
                        <label for="imagem_desktop">Imagem desktop</label>
                        <input id="imagem_desktop" class="form-control" type="file" required @input="form.imagem_desktop = $event.target.files[0]">
                        <FormError :error="form.errors.imagem_desktop" />
                    </div>
                    <div class="mb-3">
                        <div class="alert alert-info mb-0">
                            <p class="m-0">
                                A imagem mobile deve ter uma proporção de 5/4 e largura mínima de 500px
                            </p>
                            <p class="m-0">
                                Exemplo: 800px x 640px
                            </p>
                        </div>
                        <label for="imagem_mobile">Imagem mobile</label>
                        <input id="imagem_mobile" class="form-control" type="file" required @input="form.imagem_mobile = $event.target.files[0]">
                        <FormError :error="form.errors.imagem_mobile" />
                    </div>
                </div>
                <div class="card-body">
                    <button type="submit" class="btn btn-primary">
                        Adicionar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
