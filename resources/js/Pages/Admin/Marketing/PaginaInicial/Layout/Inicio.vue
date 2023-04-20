<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    versao: Object,
})

</script>

<template>
    <AdminLayout :titulo="`Layout da Versão ${versao.id}`">
        <template #buttons>
            <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/visualizar`" class="btn btn-secondary me-2 d-flex flex-nowrap align-items-center">
                <i class="fas fa-gears pe-1" /> Visualizar
            </Link>
        </template>

        <!-- <CarrosselInicio :versao="versao" /> -->
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Componente</th>
                        <th>ordem</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr>
                            <td>Carrossel Principal</td>
                            <td>1</td>
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/visualizar`" class="btn btn-primary me-2">
                                    <i class="fas fa-plus-circle pe-1" /> Visualizar
                                </Link>
                            </td>
                        </tr>
                        <tr v-for="componente in versao.componentes" :key="componente.id">
                            <td>{{ componente.tipo_nome }}</td>
                            <td>{{ componente.ordem }}</td>
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/${componente.url}/${componente.tipo.id}/visualizar`" class="btn btn-primary me-2">
                                    <i class="fas fa-eraser pe-1" /> Visualizar
                                </Link>
                                <Link :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/excluir`" class="btn btn-danger me-2">
                                    <i class="fas fa-eraser pe-1" /> Excluir
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Grade de Imagens
                </Link>
                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/banner/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Banner
                </Link>
                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/lista/produtos/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Lista de Produtos
                </Link>
            </div>
        </div>
    </AdminLayout>
</template>
