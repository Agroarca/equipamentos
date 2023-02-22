<script setup>
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Pagination from '@/Components/Admin/Pagination.vue'

const props = defineProps(['categorias', 'categoria'])

const titulo = props.categoria?.nome ? `Categorias de ${props.categoria.nome}` : 'Categorias'
</script>

<template>
    <AdminLayout :titulo="titulo" :link="route('admin.categorias.criar', categoria?.id)" button-text="Nova Categoria">
        <Link v-if="categoria" class="btn btn-primary mb-3" :href="route('admin.categorias', categoria.categoria_mae_id)">
            <i class="fas fa-arrow-left me-1" />
            {{ categoria.categoria_mae?.nome ?? "Categorias" }}
        </Link>

        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Categoria Mãe</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="categoria in categorias.data" :key="categoria.id">
                            <td>{{ categoria.nome }}</td>
                            <td>
                                <span v-if="categoria.categoria_mae">
                                    {{ categoria.categoria_mae.nome }}
                                </span>
                            </td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="route('admin.categorias.caracteristicas', categoria.id)">
                                    <i class="fas fa-sliders pe-1" />
                                    Características
                                </Link>
                                <Link class="btn btn-primary me-2" :href="route('admin.categorias', categoria.id)">
                                    <i class="fas fa-bars-staggered pe-1" />
                                    Subcategorias
                                </Link>
                                <Link class="btn btn-primary me-2" :href="route('admin.categorias.editar', categoria.id)">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="route('admin.categorias.excluir', categoria.id)">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="categorias.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Pagination class="mt-4" :links="categorias.links" />
    </AdminLayout>
</template>
