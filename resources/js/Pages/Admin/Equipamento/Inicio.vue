<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Paginacao from '@/Components/Paginacao.vue'

const props = defineProps({
    equipamentos: Object,
})
</script>

<template>
    <AdminLayout titulo="Equipamentos" link="/admin/equipamentos/criar/" button-text="Novo Equipamento">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="equipamento in equipamentos.data" :key="equipamento.id">
                            <td>{{ equipamento.titulo }}</td>
                            <td>{{ equipamento.categoria.nome }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="`/admin/equipamentos/${equipamento.id}/editar`">
                                    <i class="fas fa-pen-to-square pe-1" />
                                    Editar
                                </Link>
                                <Link class="btn btn-danger" :href="`/admin/equipamentos/${equipamento.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="equipamentos.data.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Paginacao class="mt-4" :links="equipamentos.links" />
    </AdminLayout>
</template>
