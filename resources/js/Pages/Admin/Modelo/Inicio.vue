<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Components/Paginacao.vue'

const props = defineProps({
    modelos: Object,
})
</script>

<template>
    <AdminLayout titulo="Modelos" link="/admin/modelos/criar/" button-text="Novo Modelo">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="modelo in modelos.data" :key="modelo.id">
                            <td>{{ modelo.nome }}</td>
                            <td>{{ modelo.marca.nome }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="`/admin/modelos/${modelo.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/marcas/${modelo.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="modelos.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="modelos.links" />
    </AdminLayout>
</template>
