<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link } from "@inertiajs/vue3";

const props = defineProps(['categoria', 'tipos'])

</script>

<template>
    <AdminLayout :titulo="'Características de ' + categoria.nome" :link="route('admin.categorias.caracteristicas.criar', categoria.id)" buttonText="Nova Característica">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr v-for="caracteristica in categoria.caracteristicas" :key="caracteristica.id">
                            <td>{{ caracteristica.nome }}</td>
                            <td>{{ tipos[caracteristica.tipo] }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="route('admin.categorias.caracteristicas.visualizar', [categoria.id, caracteristica.id])">
                                    <i class="fas fa-magnifying-glass pe-1"></i>
                                    Visualizar
                                </Link>
                                <Link class="btn btn-danger" :href="route('admin.categorias.caracteristicas.excluir', [categoria.id, caracteristica.id])">
                                    <i class="fas fa-eraser pe-1"></i>
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>
