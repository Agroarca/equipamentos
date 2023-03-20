<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Components/Paginacao.vue'

const props = defineProps({
    marcas: Object,
    statusCadastro: Array,
})
</script>

<template>
    <AdminLayout titulo="Marcas" link="/admin/marcas/criar/" button-text="Nova Marca">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Status</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="marca in marcas.data" :key="marca.id">
                            <td>{{ marca.nome }}</td>
                            <td>{{ statusCadastro[marca.status] }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="`/admin/marcas/${marca.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/marcas/${marca.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="marcas.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="marcas.links" />
    </AdminLayout>
</template>
