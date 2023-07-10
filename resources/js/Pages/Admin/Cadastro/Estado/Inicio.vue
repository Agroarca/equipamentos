<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'

const props = defineProps({
    estados: Object,
})
</script>

<template>
    <AdminLayout titulo="Estados" link="/admin/estados/criar/" buttonText="Novo Estado">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>UF</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="estado in estados.data" :key="estado.id">
                            <td>{{ estado.nome }}</td>
                            <td>{{ estado.uf }}</td>
                            <td>
                                <div class="grade-botoes">
                                    <Link class="btn btn-primary me-2" :href="`/admin/estados/${estado.id}/editar`">
                                        <i class="fas fa-pen-to-square pe-1" />
                                        Editar
                                    </Link>
                                    <Link class="btn btn-danger" :href="`/admin/estados/${estado.id}/excluir`">
                                        <i class="fas fa-eraser pe-1" />
                                        Excluir
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="estados.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="estados.links" />
    </AdminLayout>
</template>
