<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { defineProps } from 'vue'

const props = defineProps({
    passoCadastro: Number,
    passoAtual: Number,
    equipamento: Object,
})
</script>

<template>
    <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: passoAtual === 0, disabled: passoCadastro !== 0 }" href="#">
                Categoria
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: passoAtual == 1, disabled: passoCadastro < 1 }" :href="`/equipamento/cadastrar/${equipamento?.id ?? ''}`">
                Cadastrar
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: passoAtual == 2, disabled: passoCadastro < 2 }" :href="`/equipamento/${equipamento?.id ?? ''}/imagens`">
                Imagens
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: passoAtual == 3, disabled: passoCadastro < 3 }" :href="`/equipamento/${equipamento?.id ?? ''}/descricao`">
                Descrição
            </Link>
        </li>
        <li class="nav-item">
            <Link class="nav-link" :class="{ active: passoAtual == 4, disabled: passoCadastro < 4 }" :href="`/equipamento/${equipamento?.id ?? ''}/caracteristicas`">
                Caracteristicas
            </Link>
        </li>
    </ul>
</template>
