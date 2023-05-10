<script setup lang="ts">
import { defineProps } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    produtos: Object,
})

</script>

<template>
    <div v-if="produtos.data.length" class="card card-default">
        <div class="card-body table-responsive p-0">
            <table class="table table-striped table-hover">
                <thead>
                    <th>Titulo</th>
                    <th class="d-none d-md-table-cell">
                        Categoria
                    </th>
                    <th class="d-none d-md-table-cell">
                        Marca / Modelo
                    </th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos.data" :key="produto.id">
                        <td>
                            {{ produto.equipamento.titulo }}
                        </td>
                        <td class="d-none d-md-table-cell">
                            {{ produto.equipamento.categoria.nome }}
                        </td>
                        <td class="d-none d-md-table-cell">
                            {{ produto.equipamento.modelo.marca.nome }} / {{ produto.equipamento.modelo.nome }}
                        </td>
                        <td>
                            <div class="grade-botoes">
                                <Link class="btn btn-danger" :href="`/admin/lista/${produto.lista_id}/produtos/${produto.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div v-else class="alert alert-warning">
        Nenhum produto adicionado
    </div>
</template>
