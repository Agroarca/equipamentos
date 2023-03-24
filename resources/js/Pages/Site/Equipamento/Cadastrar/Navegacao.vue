<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    passoCadastro: Number,
    passoAtual: Number,
    equipamento: Object,
})
</script>

<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <a class="nav-link" :class="{ active: passoAtual == 1 }" :href="`/equipamento/cadastrar/${equipamento?.id ?? ''}`">Cadastrar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{ active: passoAtual == 2, disabled: passoCadastro < 2 }" :href="`/equipamento/${equipamento?.id ?? ''}/imagens`">Imagens</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{ active: passoAtual == 3, disabled: passoCadastro < 3 }" :href="`/equipamento/${equipamento?.id ?? ''}/descricao`">Descrição</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" :class="{ active: passoAtual == 4, disabled: passoCadastro < 4 }" :href="`/equipamento/${equipamento?.id ?? ''}/descricao`">Caracteristicas</a>
        </li>
    </ul>
</template>
