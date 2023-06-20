<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    versao: Object,
})

const form = useForm({
    prioridade: props.versao.prioridade,
    nome: props.versao.nome,
    data_inicio: props.versao.data_inicio,
    data_fim: props.versao.data_fim,
})

function submit() {
    form.post(`/admin/marketing/pagina/inicial/${props.versao.id}/atualizar`)
}

</script>

<template>
    <AdminLayout titulo="Nova lista">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="prioridade">Prioridade</label>
                        <input id="prioridade" v-model="form.prioridade" class="form-control" type="integer" required>
                        <FormError :error="form.errors.prioridade" />
                    </div>
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input id="nome" v-model="form.nome" class="form-control" type="text" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="data_inicio">Data inicial <span class="opcional">(Opcional)</span></label>
                        <input id="data_inicio" v-model="form.data_inicio" class="form-control" type="datetime-local">
                        <FormError :error="form.errors.data_inicio" />
                    </div>
                    <div class="mb-3">
                        <label for="data_fim">Data final <span class="opcional">(Opcional)</span></label>
                        <input id="data_fim" v-model="form.data_fim" class="form-control" type="datetime-local">
                        <FormError :error="form.errors.data_fim" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
