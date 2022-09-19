<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Pagination from "@/Components/Admin/Pagination.vue";

const props = defineProps(['categorias']);
</script>

<template>
    <AdminLayout titulo="Categorias" link="admin.categorias.criar" button-text="Nova Categoria">
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
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pagination class="mt-4" :links="categorias.links"></Pagination>
    </AdminLayout>
</template>
