<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    versao: Object,
})
</script>

<template>
    <AdminLayout titulo="Carrossel Principal" buttonText="Adicionar Imagem" :link="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/adicionar`">
        <div class="card card-default">
            <div class="card-body p-0">
                <div class="card-body table-responsive p-0">
                    <table class="table table-striped table-hover">
                        <thead>
                            <th>Link</th>
                            <th>Descrição</th>
                            <th />
                        </thead>
                        <tbody>
                            <tr v-for="item in versao.carrossel_itens" :key="item.id">
                                <td>{{ item.link }}</td>
                                <td>{{ item.descricao }}</td>
                                <td>
                                    <Link class="btn btn-secondary me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/visualizar`">
                                        <i class="fas fa-magnifying-glass pe-1" />
                                        Visualizar
                                    </Link>
                                    <Link class="btn btn-danger" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/excluir`">
                                        <i class="fas fa-eraser pe-1" />
                                        Excluir
                                    </Link>
                                </td>
                            </tr>
                            <tr v-if="versao.carrossel_itens.length == 0">
                                <td colspan="3">
                                    Nenhum registro encontrado
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AdminLayout>
</template>
