<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    equipamento: Object,
    categorias: Array,
    categoria: Object,
})
</script>

<template>
    <AdminLayout :titulo="`Alterar categoria de ${equipamento.titulo}`">
        <div class="card card-default">
            <div class="card-header">
                <h5 class="card-title">
                    Selecione uma categoria
                </h5>
            </div>
            <div class="card-body p-0">
                <table class="table table-striped table-hover">
                    <tbody>
                        <tr v-for="categoria in categorias" :key="categoria.id">
                            <td>{{ categoria.nome }}</td>
                            <td>
                                <Link :href="`/admin/equipamentos/${equipamento.id}/categoria/escolher/${categoria.id}`" class="btn btn-primary">
                                    Abrir {{ categoria.nome }}
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="categoria?.id" class="card-footer">
                <Link :href="`/admin/equipamentos/${equipamento.id}/categoria/selecionar/${categoria.id}`" class="btn btn-primary">
                    Selecionar {{ categoria.nome }}
                </Link>
            </div>
        </div>
    </AdminLayout>
</template>
