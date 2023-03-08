<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Components/Paginacao.vue'

const props = defineProps({
    categorias: Object,
    categoria: Object,
})

const titulo = props.categoria?.nome ? `Categorias de ${props.categoria.nome}` : 'Categorias'
</script>

<template>
    <AdminLayout :titulo="titulo" link="/admin/categorias/criar/" button-text="Nova Categoria">
        <Link v-if="categoria" class="btn btn-primary mb-3" :href="`/admin/categorias/${categoria?.categoria_mae_id ?? ''}`">
            <i class="fas fa-arrow-left me-1" />
            {{ categoria?.categoria_mae?.nome ?? "Categorias" }}
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
                        <tr v-for="categ in categorias.data" :key="categ.id">
                            <td>{{ categ.nome }}</td>
                            <td>
                                <span v-if="categ.categoria_mae">
                                    {{ categ.categoria_mae.nome }}
                                </span>
                            </td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="`/admin/categorias/${categ.id}/caracteristicas`">
                                    <i class="fas fa-sliders pe-1" />
                                    Características
                                </Link>
                                <Link class="btn btn-primary me-2" :href="`/admin/categorias/${categ?.id}`">
                                    <i class="fas fa-bars-staggered pe-1" />
                                    Subcategorias
                                </Link>
                                <Link class="btn btn-primary me-2" :href="`/admin/categorias/${categ.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/categorias/${categ.id}/excluir`">
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

        <Paginacao class="mt-4" :links="categorias.links" />
    </AdminLayout>
</template>
