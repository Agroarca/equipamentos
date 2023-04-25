<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'

const props = defineProps({
    versoes: Object,
    statusVersao: Array,
})
</script>

<template>
    <AdminLayout titulo="Página Inicial" link="/admin/marketing/pagina/inicial/criar" buttonText="Nova Versão">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Versao</th>
                        <th>Status</th>
                        <th>Prioridade</th>
                        <th>Data Inicial</th>
                        <th>Data Final</th>
                        <th class="d-none d-md-table-cell">
                            Nome
                        </th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="versao in versoes.data" :key="versao.id">
                            <td>{{ versao.id }}</td>
                            <td>{{ statusVersao[versao.status] }}</td>
                            <td>{{ versao.prioridade }}</td>
                            <td>{{ versao.data_inicio }}</td>
                            <td>{{ versao.data_fim }}</td>
                            <td class="d-none d-md-table-cell">
                                {{ versao.nome }}
                            </td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-secondary me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/visualizar`">
                                    <i class="fas fa-magnifying-glass pe-1" />
                                    Visualizar
                                </Link>
                                <Link class="btn btn-secondary me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout`">
                                    <i class="fas fa-gears pe-1" />
                                    Layout
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/marketing/pagina/inicial/${versao.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="versoes.data.length == 0">
                            <td colspan="6">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="versoes.links" />
    </AdminLayout>
</template>
