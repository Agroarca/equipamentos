<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    categoria: Object,
    tipos: Array,
})

</script>

<template>
    <AdminLayout :titulo="'Características de ' + categoria.nome" :link="`/admin/categorias/${categoria.id}/caracteristicas/criar`" buttonText="Nova Característica">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="caracteristica in categoria.caracteristicas" :key="caracteristica.id">
                            <td>{{ caracteristica.nome }}</td>
                            <td>{{ tipos[caracteristica.tipo] }}</td>
                            <td>
                                <div class="grade-botoes">
                                    <Link class="btn btn-primary me-2" :href="`/admin/categorias/${categoria.id}/caracteristicas/${caracteristica.id}/visualizar`">
                                        <i class="fas fa-magnifying-glass pe-1" />
                                        Visualizar
                                    </Link>
                                    <Link class="btn btn-danger" :href="`/admin/categorias/${categoria.id}/caracteristicas/${caracteristica.id}/excluir`">
                                        <i class="fas fa-eraser pe-1" />
                                        Excluir
                                    </Link>
                                </div>
                            </td>
                        </tr>
                        <tr v-if="categoria.caracteristicas.length == 0">
                            <td colspan="3">
                                Nenhum registro encontrado
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>
