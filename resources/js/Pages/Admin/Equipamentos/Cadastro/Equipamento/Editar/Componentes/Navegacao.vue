<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    paginaAtual: String,
    equipamento: Object,
})

const STATUS_CRIADO = 1
</script>

<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link" :class="{ active: paginaAtual == 'cadastro' }" :href="`/admin/equipamentos/${equipamento.id}/editar`">Editar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{ active: paginaAtual == 'descricao' }" :href="`/admin/equipamentos/${equipamento.id}/editar/descricao`">Descrição</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{ active: paginaAtual == 'caracteristicas' }" :href="`/admin/equipamentos/${equipamento.id}/editar/caracteristicas`">Caracteristicas</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{ active: paginaAtual == 'imagens' }" :href="`/admin/equipamentos/${equipamento.id}/editar/imagens`">Imagens</a>
        </li>
        <li v-if="equipamento.status == STATUS_CRIADO" class="nav-item">
            <a class="nav-link" :class="{ active: paginaAtual == 'aprovacao' }" :href="`/admin/equipamentos/${equipamento.id}/editar/aprovacao`">Aprovação</a>
        </li>
    </ul>
</template>
