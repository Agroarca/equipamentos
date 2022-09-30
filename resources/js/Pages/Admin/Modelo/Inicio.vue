<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Pagination from "@/Components/Admin/Pagination.vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps(['modelos']);
</script>

<template>
    <AdminLayout titulo="Modelos" :link="route('admin.modelos.criar')" buttonText="Novo Modelo">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-stripped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="modelo in modelos.data" :key="modelo.id">
                            <td>{{ modelo.nome }}</td>
                            <td>{{ modelo.marca.nome }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="route('admin.modelos.editar', modelo.id)">
                                    <i class="fas fa-pen-to-square pe-1"></i>
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="route('admin.modelos.excluir', modelo.id)">
                                    <i class="fas fa-eraser pe-1"></i>
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="modelos.data.length == 0">
                            <td colspan="3">Nenhum registro encontrado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pagination class="mt-4" :links="modelos.links"></Pagination>
    </AdminLayout>
</template>
