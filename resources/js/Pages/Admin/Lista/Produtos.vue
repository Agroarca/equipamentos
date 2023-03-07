<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import SelectAjax from '@/Components/Util/SelectAjax.vue'

const props = defineProps({
    lista: Object,
    options: Object,
})

const form = useForm({
    equipamento_id: '',
})

function submit() {
    form.post(`/admin/lista/${props.lista.id}/adicionar`)
}

</script>

<template>
    <AdminLayout :titulo="lista.nome" link="/admin/lista/produtos/">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <SelectAjax v-model="form.equipamento_id" href="/admin/equipamentos/pesquisar" :options="options" />
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                        Criar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
