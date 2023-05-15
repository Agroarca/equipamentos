<script setup lang="ts">
import Permissao from './Permissao.vue'

const props = defineProps({
    grupo: Object,
})

const emit = defineEmits<{(e: 'alterarPermissao', chave: String, value: Boolean): void}>()

function alterarPermissao(chave: String, value: Boolean) {
    emit('alterarPermissao', chave, value)
}
</script>

<template>
    <div class="permissao-grupo">
        <span>{{ grupo.nome }}</span>
        <div class="lista ps-4">
            <Permissao v-for="permissao in grupo.permissoes" :key="permissao.chave" :permissao="permissao" @alterarPermissao="alterarPermissao" />
        </div>
        <div class="ps-4">
            <GrupoPermissao v-for="subgrupo in grupo.grupos" :key="subgrupo.chave" :grupo="subgrupo" @alterarPermissao="alterarPermissao" />
        </div>
    </div>
</template>
