<script setup lang="ts">
import { useForm } from '@inertiajs/vue3'
import AdminLayout from '@/Layouts/AdminLayout.vue'

const props = defineProps({
    usuario: Object,
    tipoPessoaEnum: Array,
    tipoUsuarioEnum: Array,
    preferenciasNotificacao: Array,
})

const TIPO_USUARIO_ADMIN = 1

const preferencias = []
props.preferenciasNotificacao.forEach((preferencia) => {
    preferencias[`preferencia-${preferencia.id}`] = preferencia.valor
})
const form = useForm(preferencias)

function submitPreferencias() {
    form.post(`/admin/administracao/usuarios/${props.usuario.id}/preferencias/salvar`)
}
</script>

<template>
    <AdminLayout titulo="Usuarios">
        <div class="card card-default mb-5">
            <div class="card-header">
                <h5>Dados Pessoais</h5>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="nome">Nome</label>
                    <input id="nome" :value="usuario.nome" class="form-control" type="text" readonly>
                </div>
                <div class="mb-3">
                    <label for="nome">E-mail</label>
                    <input id="nome" :value="usuario.email" class="form-control" type="text" readonly>
                </div>
                <div class="mb-3">
                    <label for="nome">Celular</label>
                    <input id="nome" :value="usuario.celular" class="form-control" type="text" readonly>
                </div>
                <div class="mb-3">
                    <label for="nome">Tipo Pessoa</label>
                    <input id="nome" :value="tipoPessoaEnum[usuario.tipo_pessoa]" class="form-control" type="text" readonly>
                </div>
                <div class="mb-3">
                    <label for="nome">CPF/CNPJ</label>
                    <input id="nome" :value="usuario.cpf ?? usuario.cnpj" class="form-control" type="text" readonly>
                </div>
                <div>
                    <label for="nome">Tipo Usuario</label>
                    <input id="nome" :value="tipoUsuarioEnum[usuario.tipo_usuario]" class="form-control" type="text" readonly>
                </div>
            </div>
        </div>

        <div v-if="usuario.tipo_usuario == TIPO_USUARIO_ADMIN" class="card card-default mb-5">
            <div class="card-header">
                <h5>Grupos de Permissao</h5>
            </div>
            <div class="card-body p-0">
                <ul v-if="usuario.grupos.length > 0" class="list-group-flush">
                    <li v-for="grupo in usuario.grupos" :key="grupo.id" class="list-group-item">
                        {{ grupo.nome }}
                    </li>
                </ul>
                <span v-else>Nenhum Grupo Adicionado</span>
            </div>
        </div>

        <form @submit.prevent="submitPreferencias">
            <div v-if="usuario.tipo_usuario == TIPO_USUARIO_ADMIN" class="card card-default mb-5">
                <div class="card-header">
                    <h5>Preferências de Notificação</h5>
                </div>
                <div class="card-body">
                    <template v-for="preferencia in preferenciasNotificacao" :key="preferencia.id">
                        <div class="mb-3 form-check form-switch">
                            <input :id="`preferencia-${preferencia.id}`"
                                   v-model="form[`preferencia-${preferencia.id}`]"
                                   :value="preferencia.nome"
                                   class="form-check-input"
                                   type="checkbox">

                            <label class="form-check-label" :for="`preferencia-${preferencia.id}`">{{ preferencia.nome }}</label>
                        </div>
                    </template>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" type="submit">
                        <i class="fa-solid fa-floppy-disk me-1" />Salvar
                    </button>
                </div>
            </div>
        </form>
    </AdminLayout>
</template>
