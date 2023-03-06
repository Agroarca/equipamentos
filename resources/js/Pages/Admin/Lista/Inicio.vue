<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Components/Paginacao.vue'

const props = defineProps({
    listas: Object,
})
</script>

<template>
    <AdminLayout titulo="Marcas" link="/admin/marcas/criar/" button-text="Nova Marca">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="lista in listas.data" :key="lista.id">
                            <td>{{ lista.nome }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="`/admin/marcas/criar/${lista.id}`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/marcas/${lista.id}/excluir`">
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
