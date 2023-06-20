<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    versao: Object,
})

const STATUS_VERSAO_CRIADO = 0
</script>

<template>
    <div class="card card-default">
        <div class="card-header">
            <span class="card-title">Menu</span>
        </div>
        <div class="card-body table-responsive p-0">
            <table class="table table-striped table-hover">
                <thead>
                    <th v-if="versao.status === STATUS_VERSAO_CRIADO" />
                    <th>Nome</th>
                    <th>Link</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <tr v-for="(menuLink, index) in versao.menu_links" :key="menuLink.id">
                        <td v-if="versao.status === STATUS_VERSAO_CRIADO">
                            <div class="grade-botoes">
                                <Link
                                    :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/menu/${menuLink.id}/ordem/acima`"
                                    class="btn btn-primary me-2"
                                    :class="{ disabled: index === 0 }">
                                    <i class="fa-solid fa-circle-up" />
                                </Link>
                                <Link
                                    :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/menu/${menuLink.id}/ordem/abaixo`"
                                    class="btn btn-primary me-2"
                                    :class="{ disabled: index === versao.menu_links.length - 1 }">
                                    <i class="fa-solid fa-circle-down" />
                                </Link>
                            </div>
                        </td>
                        <td>{{ menuLink.nome }}</td>
                        <td>{{ menuLink.link }}</td>
                        <td>
                            <div class="grade-botoes">
                                <Link class="btn btn-primary" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/menu/${menuLink.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/menu/${menuLink.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="versao.menu_links.length == 0">
                        <td colspan="7">
                            Nenhum registro encontrado
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="card-footer">
            <Link v-if="versao.status === STATUS_VERSAO_CRIADO" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/menu/adicionar`" class="btn btn-primary">
                <i class="fas fa-plus-circle pe-1" /> Adicionar link
            </Link>
        </div>
    </div>
</template>
