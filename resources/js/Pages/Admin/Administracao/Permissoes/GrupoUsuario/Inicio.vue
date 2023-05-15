<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3'
import { ref } from 'vue'
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'
import SelectAjax from '@/Componentes/Layout/Forms/SelectAjax.vue'

const props = defineProps({
    grupo: Object,
    usuarios: Object,
})

const form = useForm({
    usuario_id: '',
})

let modal = ref(null)
function abrirModal() {
    modal.value.show()
}

function adicionarUsuario() {
    loader.show()
    form.post(`/admin/administracao/permissoes/grupo/${props.grupo.id}/usuarios/adicionar`, { onFinish: () => {
        modal.value.hide()
        loader.hide()
    } })
}
</script>

<template>
    <AdminLayout :titulo="`Usuários de ${grupo.nome}`">
        <template #buttons>
            <button type="button" class="btn btn-primary me-2 d-flex flex-nowrap align-items-center" @click="abrirModal">
                <i class="fas fa-plus-circle pe-1" /> Adicionar Usuário
            </button>
        </template>
        <div class="card card-default">
            <div class="card-body table-responsive t-0">
                <table class="table table-stripped table-hover">
                    <thead>
                        <th>Nome</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios.data" :key="usuario.id">
                            <td>{{ usuario.nome }}</td>
                            <td>
                                <Link class="btn btn-danger" :href="`/admin/administracao/permissoes/grupo/${grupo.id}/usuarios/${usuario.id}/excluir`">
                                    <i class="fas fa-eraser pe-1" />
                                    Excluir
                                </Link>
                            </td>
                        </tr>
                        <tr v-if="usuarios.data.length === 0">
                            <td colspan="2" class="text-center">
                                Nenhum usuário encontrado.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <form @submit.prevent="adicionarUsuario">
            <Modal ref="modal" title="Adicionar Usuário">
                <SelectAjax
                    v-model="form.usuario_id"
                    placeholder="Selecione um Usuario"
                    href="/admin/pesquisar/usuario/admin"
                    :preBusca="true" />
                <template #footer>
                    <button type="submit" class="btn btn-primary">
                        <i class="fas fa-plus-circle pe-1" /> Adicionar
                    </button>
                </template>
            </Modal>
        </form>
    </adminlayout>
</template>
