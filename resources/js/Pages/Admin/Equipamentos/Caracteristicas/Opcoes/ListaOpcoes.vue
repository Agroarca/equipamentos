<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    caracteristica: Object,
})
</script>

<template>
    <div class="card card-default">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-8">
                    <h5>Opções</h5>
                </div>
                <div class="col-sm-4 pt-3 pt-sm-0">
                    <Link :href="`/admin/categorias/${caracteristica.categoria_id}/caracteristicas/${caracteristica.id}/opcoes/criar`"
                          class="btn btn-primary float-sm-end">
                        <i class="fas fa-plus-circle pr-1" /> Criar Opção
                    </Link>
                </div>
            </div>
        </div>
        <div class="card-body table-responsive p-0">
            <table class="table table-stri=ped table-hover">
                <thead>
                    <th>Nome</th>
                    <th />
                </thead>
                <tbody>
                    <tr v-for="opcao in caracteristica.opcoes" :key="opcao.id">
                        <td>{{ opcao.nome }}</td>
                        <td>
                            <Link class="btn btn-danger" :href="`/admin/categorias/${caracteristica.categoria_id}/caracteristicas/${caracteristica.id}/opcoes/${opcao.id}/excluir`">
                                <i class="fas fa-eraser pe-1" />
                                Excluir
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
