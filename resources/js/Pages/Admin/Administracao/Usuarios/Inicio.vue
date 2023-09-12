<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    usuarios: Object,
    tipoPessoaEnum: Array,
})
</script>

<template>
    <AdminLayout titulo="Usuarios">
        <div class="card card-default">
            <div class="card-body table-responsive p-0">
                <table class="table table-stripped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Tipo Pessoa</th>
                        <th>CPF/CNPJ</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios.data" :key="usuario.id">
                            <td>{{ usuario.nome }}</td>
                            <td>{{ tipoPessoaEnum[usuario.tipo_pessoa] }}</td>
                            <td>{{ usuario.cpf ?? usuario.cnpj }}</td>
                            <td>
                                <Link class="btn btn-primary" :href="`/admin/administracao/usuarios/${usuario.id}/visualizar`">
                                    <i class="fas fa-magnifying-glass pe-1" />
                                    Visualizar
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </AdminLayout>
</template>
