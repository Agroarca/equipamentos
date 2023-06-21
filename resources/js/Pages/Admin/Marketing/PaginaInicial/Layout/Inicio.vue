<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { isEmpty } from 'lodash'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Menu from '@/Pages/Admin/Marketing/PaginaInicial/Menu/Inicio.vue'

const props = defineProps({
    versao: Object,
    errors: Object,
})

const STATUS_VERSAO_CRIADO = 0
const STATUS_VERSAO_APROVADO = 1

</script>

<template>
    <AdminLayout :titulo="`Layout da versão ${versao.id}`">
        <template #buttons>
            <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/visualizar`" class="btn btn-secondary me-2 d-flex flex-nowrap align-items-center">
                <i class="fas fa-magnifying-glass pe-1" /> Visualizar layout
            </Link>
        </template>

        <div v-if="!isEmpty(errors)" class="alert alert-danger">
            <span v-for="error in errors" :key="error">
                {{ error }}
            </span>
        </div>

        <Menu :versao="versao" />

        <div class="card card-default mt-4">
            <div class="card-header">
                <span class="card-title">Componentes</span>
            </div>
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th v-if="versao.status === STATUS_VERSAO_CRIADO" />
                        <th>id</th>
                        <th>Componente</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-if="versao.status === STATUS_VERSAO_CRIADO" />
                            <td />
                            <td>Carrossel principal</td>
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/visualizar`" class="btn btn-primary me-2">
                                    <i class="fas fa-magnifying-glass pe-1" /> Visualizar
                                </Link>
                            </td>
                        </tr>
                        <tr v-for="(componente, index) in versao.componentes" :key="componente.id">
                            <td v-if="versao.status === STATUS_VERSAO_CRIADO">
                                <div class="grade-botoes">
                                    <Link
                                        :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/ordem/acima`"
                                        class="btn btn-primary me-2"
                                        :class="{ disabled: index === 0 }">
                                        <i class="fa-solid fa-circle-up" />
                                    </Link>
                                    <Link
                                        :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/ordem/abaixo`"
                                        class="btn btn-primary me-2"
                                        :class="{ disabled: index === versao.componentes.length - 1 }">
                                        <i class="fa-solid fa-circle-down" />
                                    </Link>
                                </div>
                            </td>
                            <td>{{ componente.id }}</td>
                            <td>{{ componente.tipo_nome }}</td>
                            <td>
                                <div class="grade-botoes">
                                    <Link
                                        :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/${componente.url}/${componente.tipo.id}/visualizar`"
                                        class="btn btn-primary me-2">
                                        <i class="fas fa-magnifying-glass pe-1" /> Visualizar
                                    </Link>
                                    <Link v-if="versao.status === STATUS_VERSAO_CRIADO"
                                          :href="`/admin/marketing/pagina/inicial/${props.versao.id}/layout/componente/${componente.id}/excluir`"
                                          class="btn btn-danger me-2">
                                        <i class="fas fa-eraser pe-1" /> Excluir
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer">
                <div class="grade-botoes">
                    <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/adicionar`" class="btn btn-primary me-2">
                        <i class="fas fa-plus-circle pe-1" /> Adicionar grade de imagens
                    </Link>
                    <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/banner/adicionar`" class="btn btn-primary me-2">
                        <i class="fas fa-plus-circle pe-1" /> Adicionar banner
                    </Link>
                    <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/lista/produtos/adicionar`" class="btn btn-primary me-2">
                        <i class="fas fa-plus-circle pe-1" /> Adicionar lista de produtos
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
        </div>
    </AdminLayout>
</template>
