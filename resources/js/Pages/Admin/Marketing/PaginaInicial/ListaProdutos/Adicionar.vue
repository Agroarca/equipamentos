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
                        <label for="titulo">Título <span class="opcional">(Opcional)</span></label>
                        <input id="titulo" v-model="form.titulo" class="form-control" type="text">
                        <FormError :error="form.errors.titulo" />
                    </div>
                    <div class="mb-3">
                        <label for="subtitulo">Subtítulo <span class="opcional">(Opcional)</span></label>
                        <input id="subtitulo" v-model="form.subtitulo" class="form-control" type="text">
                        <FormError :error="form.errors.subtitulo" />
                    </div>
                    <div class="mb-3">
                        <label for="lista_produtos_id">Lista de Produtos: </label>
                        <select id="lista_produtos_id" v-model="form.lista_produtos_id" name="lista_produtos_id" class="form-select" required>
                            <option v-for="lista in listasProdutos" :key="lista.id" :value="lista.id">
                                {{ lista.nome }}
                            </option>
                            <option v-if="listasProdutos.length === 0" value="" disabled>
                                Nenhuma lista encontrada
                            </option>
                        </select>
                        <FormError :error="form.errors.lista_produtos_id" />
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary me-2" type="submit">
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
