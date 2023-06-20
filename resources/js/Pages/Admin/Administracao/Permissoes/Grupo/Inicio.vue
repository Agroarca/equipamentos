<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    grupos: Object,
})
</script>

<template>
    <AdminLayout titulo="Grupos" buttonText="Adicionar grupo" link="/admin/administracao/permissoes/grupo/criar">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-stripped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="grupo in grupos.data" :key="grupo.id">
                            <td>{{ grupo.nome }}</td>
                            <td>
                                <div class="grade-botoes">
                                    <Link class="btn btn-secondary" :href="`/admin/administracao/permissoes/grupo/${grupo.id}/permissoes`">
                                        <i class="fas fa-pen-to-square pe-1" />
                                        Editar permissões
                                    </Link>
                                    <Link class="btn btn-secondary" :href="`/admin/administracao/permissoes/grupo/${grupo.id}/usuarios`">
                                        <i class="fas fa-pen-to-square pe-1" />
                                        Editar usuários
                                    </Link>
                                    <Link class="btn btn-secondary" :href="`/admin/administracao/permissoes/grupo/${grupo.id}/editar`">
                                        <i class="fas fa-pen-to-square pe-1" />
                                        Editar
                                    </Link>
                                    <Link class="btn btn-danger" :href="`/admin/administracao/permissoes/grupo/${grupo.id}/excluir`">
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
        <Paginacao class="mt-4" :links="grupos.links" />
    </AdminLayout>
</template>
