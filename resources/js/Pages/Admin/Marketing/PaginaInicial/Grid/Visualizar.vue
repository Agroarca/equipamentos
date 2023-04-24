<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    versao: Object,
    grid: Object,
    formato: String,
})
</script>

<template>
    <AdminLayout titulo="Visualizar Grade de Imagens" buttonText="Adicionar Imagem" :link="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/adicionar`">
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
                <table class="table table-striped table-hover">
                    <thead>
                        <th />
                        <th>Link</th>
                        <th>Ordem</th>
                        <th>Descrição</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="(imagem, index) in grid.imagens" :key="imagem.id">
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/ordem/acima`" class="btn btn-primary me-2" :class="{ disabled: index === 0 }">
                                    <i class="fa-solid fa-circle-up" />
                                </Link>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/ordem/abaixo`" class="btn btn-primary me-2" :class="{ disabled: index === grid.imagens.length - 1 }">
                                    <i class="fa-solid fa-circle-down" />
                                </Link>
                            </td>
                            <td>{{ imagem.link }}</td>
                            <td>{{ imagem.ordem }}</td>
                            <td>{{ imagem.descricao }}</td>
                            <td>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/visualizar`" class="btn btn-primary me-2">
                                    <i class="fas fa-magnifying-glass pe-1" /> Visualizar
                                </Link>
                                <Link :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/grid/${grid.id}/imagem/${imagem.id}/excluir`" class="btn btn-danger me-2">
                                    <i class="fas fa-eraser pe-1" /> Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="grid.imagens.length == 0">
                            <td colspan="4">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>
