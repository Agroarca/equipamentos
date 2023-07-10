<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'

const props = defineProps({
    cidades: Object,
})
</script>

<template>
    <AdminLayout titulo="Cidades" link="/admin/cidades/criar/" buttonText="Nova Cidade">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Estado</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="cidade in cidades.data" :key="cidade.id">
                            <td>{{ cidade.nome }}</td>
                            <td>{{ cidade.estado.uf }}</td>
                            <td>
                                <div class="grade-botoes">
                                    <Link class="btn btn-primary me-2" :href="`/admin/cidades/${cidade.id}/editar`">
                                        <i class="fas fa-pen-to-square pe-1" />
                                        Editar
                                    </Link>
                                    <Link class="btn btn-danger" :href="`/admin/cidades/${cidade.id}/excluir`">
                                        <i class="fas fa-eraser pe-1" />
                                        Excluir
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="cidades.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="cidades.links" />
    </AdminLayout>
</template>
