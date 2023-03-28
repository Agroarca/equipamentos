<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'

const props = defineProps({
    listas: Object,
})
</script>

<template>
    <AdminLayout titulo="Listas" link="/admin/lista/criar/" button-text="Nova Lista">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Slug</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="lista in listas.data" :key="lista.id">
                            <td>{{ lista.nome }}</td>
                            <td>{{ lista.slug }}</td>
                            <td>
                                <Link class="btn btn-success me-2" :href="`/admin/lista/${lista.id}/produtos`">
                                    <i class="fa-solid fa-boxes-stacked pe-1" />
                                    Produtos
                                </Link>
                                <Link class="btn btn-primary me-2" :href="`/admin/lista/${lista.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/lista/${lista.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="listas.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="listas.links" />
    </AdminLayout>
</template>
