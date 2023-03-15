<script setup lang="ts">
import { defineProps } from 'vue'
import { Link, useForm } from '@inertiajs/vue3'

const props = defineProps({
    produtos: Object,
})

</script>

<template>
    <div v-if="produtos.data.length" class="card card-default">
        <div class="card-body p-0">
            <table class="table table-striped table-hover">
                <thead>
                    <th>Titulo</th>
                    <th>Categoria</th>
                    <th>Marca / Modelo</th>
                    <th />
                </thead>
                <tbody>
                    <tr v-for="produto in produtos.data" :key="produto.id">
                        <td>
                            {{ produto.equipamento.titulo }}
                        </td>
                        <td>
                            {{ produto.equipamento.categoria.nome }}
                        </td>
                        <td>
                            {{ produto.equipamento.modelo.marca.nome }} / {{ produto.equipamento.modelo.nome }}
                        </td>
                        <td>
                            <Link class="btn btn-danger" :href="`/admin/lista/${produto.lista_id}/produtos/${produto.id}/excluir`">
                                <i class="fas fa-eraser pe-1" />
                                Excluir
                            </Link>
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
