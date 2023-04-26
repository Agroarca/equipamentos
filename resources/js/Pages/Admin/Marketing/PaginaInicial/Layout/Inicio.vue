<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { isEmpty } from 'lodash'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    versao: Object,
    errors: Object,
})

const STATUS_VERSAO_CRIADO = 0
const STATUS_VERSAO_APROVADO = 1

</script>

<template>
    <AdminLayout :titulo="`Layout da Versão ${versao.id}`">
        <template #buttons>
            <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/visualizar`" class="btn btn-secondary me-2 d-flex flex-nowrap align-items-center">
                <i class="fas fa-magnifying-glass pe-1" /> Visualizar Layout
            </Link>
        </template>

        <div v-if="!isEmpty(errors)" class="alert alert-danger">
            <span v-for="error in errors" :key="error">
                {{ error }}
            </span>
        </div>

        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th v-if="versao.status === STATUS_VERSAO_CRIADO" />
                        <th>id</th>
                        <th>Componente</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr>
                            <td v-if="versao.status === STATUS_VERSAO_CRIADO" />
                            <td />
                            <td>Carrossel Principal</td>
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/visualizar`" class="btn btn-primary me-2">
                                    <i class="fas fa-magnifying-glass pe-1" /> Visualizar
                                </Link>
                            </td>
                        </tr>
                        <tr v-for="(componente, index) in versao.componentes" :key="componente.id">
                            <td v-if="versao.status === STATUS_VERSAO_CRIADO">
                                <Link :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/ordem/acima`" class="btn btn-primary me-2" :class="{ disabled: index === 0 }">
                                    <i class="fa-solid fa-circle-up" />
                                </Link>
                                <Link :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/ordem/abaixo`" class="btn btn-primary me-2" :class="{ disabled: index === versao.componentes.length - 1 }">
                                    <i class="fa-solid fa-circle-down" />
                                </Link>
                            </td>
                            <td>{{ componente.id }}</td>
                            <td>{{ componente.tipo_nome }}</td>
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/${componente.url}/${componente.tipo.id}/visualizar`" class="btn btn-primary me-2">
                                    <i class="fas fa-magnifying-glass pe-1" /> Visualizar
                                </Link>
                                <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/excluir`" class="btn btn-danger me-2">
                                    <i class="fas fa-eraser pe-1" /> Excluir
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Grade de Imagens
                </Link>
                <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/banner/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Banner
                </Link>
                <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/lista/produtos/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Lista de Produtos
                </Link>
                <Link v-if="versao.status === STATUS_VERSAO_CRIADO" class="btn btn-success me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/aprovar`">
                    <i class="fas fa-gears pe-1" />
                    Aprovar
                </Link>
                <Link v-if="versao.status === STATUS_VERSAO_CRIADO" class="btn btn-danger me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/reprovar`">
                    <i class="fas fa-gears pe-1" />
                    Reprovar
                </Link>
                <Link v-if="versao.status === STATUS_VERSAO_APROVADO" class="btn btn-success me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/publicar`">
                    <i class="fas fa-gears pe-1" />
                    Publicar
                </Link>
                <Link v-if="versao.status !== STATUS_VERSAO_CRIADO" class="btn btn-secondary me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/voltar`">
                    <i class="fas fa-gears pe-1" />
                    Voltar para edição
                </Link>
            </div>
        </div>
    </AdminLayout>
</template>
