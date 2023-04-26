<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'
import ListaProdutos from './Componentes/ListaProdutos.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'

const props = defineProps({
    lista: Object,
    produtos: Object,
})

const form = useForm({
    equipamento_id: '',
})

function submit() {
    form.post(`/admin/lista/${props.lista.id}/adicionar`)
}

</script>

<template>
    <AdminLayout :titulo="lista.nome">
        <form @submit.prevent="submit">
            <div class="card card-default mb-4">
                <div class="card-body">
                    <div>
                        <SelectAjax v-model="form.equipamento_id" href="/admin/equipamentos/pesquisar" :preBusca="true" />
                        <FormError :error="form.errors.equipamento_id" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Adicionar
                    </button>
                </div>
            </div>
        </form>
        <ListaProdutos :produtos="produtos" />
    </AdminLayout>
</template>
