<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import FormError from "../../../Components/FormError.vue";

const form = useForm({
    'nome': '',
    'categoria_mae_id': null
})

function submit() {
    form.post(route('admin.categorias.salvar'))
}

const options = ['testea', 'testeb']
</script>

<template>
    <AdminLayout titulo="Nova Categoria">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="form-group">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input class="form-control" type="text" id="nome" v-model="form.nome" required>
                            <FormError :error="form.errors.nome" />
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Criar</button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
