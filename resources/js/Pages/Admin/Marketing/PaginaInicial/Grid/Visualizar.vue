<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    versao: Object,
    grid: Object,
    formato: String,
    alerta: String,
})

const STATUS_VERSAO_CRIADO = 0
</script>

<template>
    <AdminLayout titulo="Visualizar Grade de Imagens">
        <div class="card card-default mb-5">
            <div class="card-body">
                <div class="mb-3">
                    <label for="titulo">Título</label>
                    <input type="text" class="form-control" name="titulo" :value="grid.componente.titulo" disabled />
                </div>
                <div class="mb-3">
                    <label for="subtitulo">Subtítulo</label>
                    <input type="text" class="form-control" name="subtitulo" :value="grid.componente.subtitulo" disabled />
                </div>
                <div class="mb-3 form-check">
                    <label for="tela_cheia">Tela Cheia</label>
                    <input type="checkbox" class="form-check-input" name="tela_cheia" :checked="grid.componente.tela_cheia" disabled />
                </div>
                <div class="mb-3">
                    <label for="titulo">Formato</label>
                    <input id="titulo" :value="formato" disabled class="form-control" type="text">
                </div>
            </div>
        </div>
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <div v-if="alerta" class="p-3 pb-0">
                    <div class="alert alert-danger m-0">
                        {{ alerta }}
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <th v-if="versao.status === STATUS_VERSAO_CRIADO" />
                        <th>Link</th>
                        <th>Ordem</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="(imagem, index) in grid.imagens" :key="imagem.id">
                            <td v-if="versao.status === STATUS_VERSAO_CRIADO">
                                <div class="grade-botoes">
                                    <Link
                                        :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/ordem/acima`"
                                        class="btn btn-primary me-2"
                                        :class="{ disabled: index === 0 }">
                                        <i class="fa-solid fa-circle-up" />
                                    </Link>
                                    <Link
                                        :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/ordem/abaixo`"
                                        class="btn btn-primary me-2"
                                        :class="{ disabled: index === grid.imagens.length - 1 }">
                                        <i class="fa-solid fa-circle-down" />
                                    </Link>
                                </div>
                            </td>
                            <td>{{ imagem.link }}</td>
                            <td>{{ imagem.ordem }}</td>
                            <td>{{ imagem.descricao }}</td>
                            <td>
                                <div class="grade-botoes">
                                    <Link
                                        :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/visualizar`"
                                        class="btn btn-primary me-2">
                                        <i class="fas fa-magnifying-glass pe-1" /> Visualizar
                                    </Link>
                                    <Link v-if="versao.status === STATUS_VERSAO_CRIADO"
                                          :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/excluir`"
                                          class="btn btn-danger me-2">
                                        <i class="fas fa-eraser pe-1" /> Excluir
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="grid.imagens.length == 0">
                            <td colspan="5">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="versao.status === STATUS_VERSAO_CRIADO" class="card-footer">
                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/adicionar`" class="btn btn-primary me-2">
                    <i class="fas fa-plus-circle pe-1" /> Adicionar Imagem
                </Link>
            </div>
        </div>
    </AdminLayout>
</template>
