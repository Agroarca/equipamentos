<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
    listasProdutos: Array,
})

const form = useForm({
    titulo: '',
    subtitulo: '',
    tela_cheia: false,
    lista_produtos_id: null,
})

function submit() {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/layout/lista/produtos/salvar`)
}
</script>

<template>
    <AdminLayout titulo="Nova Grade de Imagens">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="titulo">Título (opcional)</label>
                        <input id="titulo" v-model="form.titulo" class="form-control" type="text">
                        <FormError :error="form.errors.titulo" />
                    </div>
                    <div class="mb-3">
                        <label for="subtitulo">Subtítulo (opcional)</label>
                        <input id="subtitulo" v-model="form.subtitulo" class="form-control" type="text">
                        <FormError :error="form.errors.subtitulo" />
                    </div>
                    <div class="mb-3 form-check">
                        <label for="tela_cheia">Tela cheia</label>
                        <input v-model="form.tela_cheia" name="tela_cheia" :checked="form.tela_cheia" class="form-check-input" type="checkbox">
                        <FormError :error="form.errors.tela_cheia" />
                    </div>
                    <div class="mb-3">
                        <label for="lista_produtos_id">Lista de Produtos: </label>
                        <select v-model="form.lista_produtos_id" name="lista_produtos_id" class="form-select" required>
                            <option v-for="lista in listasProdutos" :key="lista.id" :value="lista.id">
                                {{ lista.nome }}
                            </option>
                        </select>
                        <FormError :error="form.errors.lista_produtos_id" />
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
