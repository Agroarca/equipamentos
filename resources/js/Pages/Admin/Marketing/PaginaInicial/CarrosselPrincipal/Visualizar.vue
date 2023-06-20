<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    versao: Object,
})

const STATUS_VERSAO_CRIADO = 0
</script>

<template>
    <AdminLayout titulo="Carrossel principal" buttonText="Adicionar Imagem">
        <div class="card card-default">
            <div class="card-body p-0">
                <div class="card-body table-responsive p-0">
                    <table class="table table-striped table-hover">
                        <thead>
                            <th v-if="versao.status === STATUS_VERSAO_CRIADO" />
                            <th>Link</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in versao.carrossel_itens" :key="item.id">
                                <td v-if="versao.status === STATUS_VERSAO_CRIADO">
                                    <div class="grade-botoes">
                                        <Link
                                            :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/ordem/acima`"
                                            class="btn btn-primary me-2"
                                            :class="{ disabled: index === 0 }">
                                            <i class="fa-solid fa-circle-up" />
                                        </Link>
                                        <Link
                                            :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/ordem/abaixo`"
                                            class="btn btn-primary me-2"
                                            :class="{ disabled: index === versao.carrossel_itens.length - 1 }">
                                            <i class="fa-solid fa-circle-down" />
                                        </Link>
                                    </div>
                                </td>
                                <td>{{ item.link }}</td>
                                <td>{{ item.descricao }}</td>
                                <td>
                                    <div class="grade-botoes">
                                        <Link class="btn btn-secondary me-2" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/visualizar`">
                                            <i class="fas fa-magnifying-glass pe-1" />
                                            Visualizar
                                        </Link>
                                        <Link v-if="versao.status === STATUS_VERSAO_CRIADO"
                                              class="btn btn-danger"
                                              :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/${item.id}/excluir`">
                                            <i class="fas fa-eraser pe-1" />
                                            Excluir
                                        </Link>
                                    </div>
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
            <div v-if="versao.status === STATUS_VERSAO_CRIADO" class="card-footer">
                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar imagem
                </Link>
            </div>
        </div>
    </AdminLayout>
</template>
