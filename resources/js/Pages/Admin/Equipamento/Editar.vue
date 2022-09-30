<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import FormError from "../../../Components/FormError.vue";
import AlterarCategoriaMae from "./partials/AlterarCategoriaMae.vue";
import { ref } from "vue";

const props = defineProps(['categoria']);
let alterarCategoria = ref(null)

const form = useForm({
    'nome': props.categoria.nome,
    'categoria_mae_id': props.categoria.categoria_mae_id
})

function submit() {
    form.post(route('admin.categorias.atualizar', props.categoria.id))
}

function openModal(){
    alterarCategoria.value.show()
}

function moverCategoria(categoriaId){
    form.categoria_mae_id = categoriaId
    submit()
}
</script>

<template>
    <AdminLayout titulo="Editar Categoria">
        <form @submit.prevent="submit">
            <div class="card card-default">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="nome">Nome</label>
                        <input class="form-control" type="text" id="nome" v-model="form.nome" required>
                        <FormError :error="form.errors.nome" />
                    </div>
                    <div class="mb-3">
                        <label for="nome">Categoria Mãe</label>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <input class="form-control" type="text" id="nome" :value="categoria.categoria_mae?.nome" disabled>
                            </div>
                            <div class="ms-2">
                                <button class="btn btn-primary" @click.prevent="openModal()">
                                    <i class="fas fa-rotate"></i>
                                    Mover
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </form>
        <AlterarCategoriaMae :categoria="categoria" ref="alterarCategoria" @moverCategoria="moverCategoria"></AlterarCategoriaMae>
    </AdminLayout>
</template>
