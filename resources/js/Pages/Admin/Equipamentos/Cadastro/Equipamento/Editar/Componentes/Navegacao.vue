<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
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
            <Link class="nav-link" :class="{ active: paginaAtual == 'cadastro' }" :href="`/admin/equipamentos/${equipamento.id}/editar`">
                Editar
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: paginaAtual == 'descricao' }" :href="`/admin/equipamentos/${equipamento.id}/editar/descricao`">
                Descrição
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: paginaAtual == 'caracteristicas' }" :href="`/admin/equipamentos/${equipamento.id}/editar/caracteristicas`">
                Caracteristicas
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: paginaAtual == 'imagens' }" :href="`/admin/equipamentos/${equipamento.id}/editar/imagens`">
                Imagens
            </Link>
        </li>
        <li v-if="equipamento.status == STATUS_CRIADO" class="nav-item">
            <Link class="nav-link" :class="{ active: paginaAtual == 'aprovacao' }" :href="`/admin/equipamentos/${equipamento.id}/editar/aprovacao`">
                Aprovação
            </Link>
        </li>
    </ul>
</template>
