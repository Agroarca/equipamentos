<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    categoria: Object,
    tipos: Array,
})

</script>

<template>
    <AdminLayout :titulo="'Características de ' + categoria.nome" :link="route('admin.categorias.caracteristicas.criar', categoria.id)" button-text="Nova Característica">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th />
                    </thead>
                    <tbody>
                        <tr v-for="caracteristica in categoria.caracteristicas" :key="caracteristica.id">
                            <td>{{ caracteristica.nome }}</td>
                            <td>{{ tipos[caracteristica.tipo] }}</td>
                            <td>
                                <Link class="btn btn-primary me-2" :href="route('admin.categorias.caracteristicas.visualizar', [categoria.id, caracteristica.id])">
                                    <i class="fas fa-magnifying-glass pe-1" />
                                    Visualizar
                                </Link>
                                <Link class="btn btn-danger" :href="route('admin.categorias.caracteristicas.excluir', [categoria.id, caracteristica.id])">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>
