<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Pagination from "@/Components/Admin/Pagination.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";

const props = defineProps(['categorias', 'categoria']);
</script>

<template>
    <AdminLayout>
        <template #header>
            <Head title="Categorias" />
                <header class="row pb-4">
                    <div class="col-sm-8">
                        <h1>Categorias</h1>
                    </div>
                    <div class="col-sm-4 pt-3 pt-sm-0">
                        <Link :href="route('admin.categorias.criar', categoria?.id ?? undefined)" class="btn btn-primary float-sm-end">
                            <i class="fas fa-plus-circle pr-1"></i> Nova Categoria
                        </Link>
                    </div>
                </header>
        </template>

        <Link v-if="categoria" class="btn btn-primary mb-3" :href="route('admin.categorias', categoria.categoria_mae_id ?? undefined)">
            <i class="fas fa-arrow-left me-1"></i>
            {{ categoria.categoria_mae?.nome ?? "Categorias" }}
        </Link>

        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-stripped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Categoria Mãe</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="categoria in categorias.data" :key="categoria.id">
                            <td>{{ categoria.nome }}</td>
                            <td>
                                <span v-if="categoria.categoriaMae">
                                    {{ categoria.categoriaMae.nome }}
                                </span>
                            </td>
                            <td class="acoes">
                                <Link class="btn btn-primary" :href="route('admin.categorias', categoria.id)">
                                    <i class="fas fa-bars-staggered"></i>
                                    Subcategorias
                                </Link>
                                <Link class="btn btn-primary" :href="route('admin.categorias.editar', categoria.id)">
                                    <i class="fas fa-pen-to-square"></i>
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="route('admin.categorias.excluir', categoria.id)">
                                    <i class="fas fa-eraser"></i>
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="categorias.data.length == 0">
                            <td colspan="3">Nenhum registro encontrado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pagination class="mt-4" :links="categorias.links"></Pagination>
    </AdminLayout>
</template>
