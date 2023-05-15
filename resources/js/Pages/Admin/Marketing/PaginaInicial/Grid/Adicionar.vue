<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
    formatos: Array,
})

const form = useForm({
    titulo: '',
    subtitulo: '',
    tela_cheia: false,
    formato: 0,
})

function submit() {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/layout/grid/salvar`)
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
                        <label for="formato">Formato</label>
                        <select v-model="form.formato" name="formato" class="form-select" required>
                            <option v-for="(formato, valor) in formatos" :key="valor" :value="valor">
                                {{ formato }}
                            </option>
                        </select>
                        <FormError :error="form.errors.formato" />
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
