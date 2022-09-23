<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import FormError from "../../../Components/FormError.vue";

const props = defineProps(['categoriaMae'])

const form = useForm({
    'nome': '',
    'categoria_mae_id': props.categoriaMae?.id
})

function submit() {
    form.post(route('admin.categorias.salvar'))
}

</script>

<template>
    <AdminLayout titulo="Nova Categoria">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input class="form-control" type="text" id="nome" v-model="form.nome" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="nome">Categoria Mãe: </label>
                        <input class="form-control" type="text" id="nome" :value="categoriaMae?.nome" disabled>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Criar</button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
