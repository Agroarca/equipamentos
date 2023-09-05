<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import PerfilLayout from './Componentes/PerfilLayout.vue'

const props = defineProps({
    user: Object,
})
</script>

<template>
    <PerfilLayout titulo="Meus dados" pagina="perfil">
        <div class="perfil d-flex flex-fill flex-column">
            <div class="mb-3">
                <h1>Meus dados</h1>
            </div>
            <ul class="list-group mb-3">
                <li class="list-group-item">
                    <span class="d-block fw-bold">Nome completo:</span>
                    <span>{{ user.nome }}</span>
                </li>
                <li class="list-group-item">
                    <span class="d-block fw-bold">E-mail:</span>
                    <span>{{ user.email }}</span>
                </li>
                <li v-if="user.cpf" class="list-group-item">
                    <span class="d-block fw-bold">CPF:</span>
                    <span>{{ user.cpf }}</span>
                </li>
                <li v-else class="list-group-item">
                    <span class="d-block fw-bold">CNPJ:</span>
                    <span>{{ user.cnpj }}</span>
                </li>
                <li class="list-group-item">
                    <span class="d-block fw-bold">Celular:</span>
                    <span>{{ user.celular }}</span>
                </li>
            </ul>
            <div class="mb-3">
                <Link href="/perfil/editar" class="btn btn-primary" type="submit">
                    Atualizar
                </Link>
            </div>
        </div>
    </PerfilLayout>
</template>
