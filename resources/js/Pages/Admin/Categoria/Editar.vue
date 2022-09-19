<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm, Head } from "@inertiajs/inertia-vue3";
import FormError from "../../../Components/FormError.vue";

const props = defineProps(['categoria']);

const form = useForm({
    'nome': categoria.nome,
    'categoria_mae_id': categoria.categoria_mae_id
})

function submit() {
    form.post(route('admin.categorias.atualizar'))
}
</script>

<template>
    <AdminLayout titulo="Editar Categoria">
        <div class="card card-default">
            <div class="card-body">
                <form @submit.prevent="submit">
                    <div class="form-group">
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input class="form-control" type="text" id="nome" v-model="form.nome" required>
                            <FormError :error="form.errors.nome" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer">
                <button type="submit" class="btn btn-primary">Salvar</button>
            </div>
        </div>
    </AdminLayout>
</template>
