<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import Pagination from "@/Components/Admin/Pagination.vue";
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps(['equipamentos']);
</script>

<template>
    <AdminLayout titulo="Equipamentos" :link="route('admin.equipamentos.criar')" buttonText="Novo Equipamento">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-stripped table-hover">
                    <thead>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="equipamento in equipamentos.data" :key="equipamento.id">
                            <td>{{ equipamento.nome }}</td>
                            <td>{{ equipamento.categoria.nome }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="route('admin.equipamentos.editar', categoria.id)">
                                    <i class="fas fa-pen-to-square pe-1"></i>
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="route('admin.equipamentos.excluir', categoria.id)">
                                    <i class="fas fa-eraser pe-1"></i>
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="equipamentos.data.length == 0">
                            <td colspan="3">Nenhum registro encontrado</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pagination class="mt-4" :links="equipamentos.links"></Pagination>
    </AdminLayout>
</template>
