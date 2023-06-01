<script setup lang="ts">

const props = defineProps({
    permissao: Object,
})

const emit = defineEmits<{(e: 'alterarPermissao', chave: String, value: Boolean): void}>()

function alterarPermissao(chave: String, value: Boolean) {
    if (value === props.permissao.valor) {
        emit('alterarPermissao', chave, null)
        return
    }

    emit('alterarPermissao', chave, value)
}
</script>

<template>
    <div class="permissao">
        <input :id="permissao.chave" :checked="permissao.valor" type="checkbox" @change="e => alterarPermissao(permissao.chave, e.target.checked)">
        <label :for="permissao.chave" class="ms-1">{{ permissao.nome }}</label>
    </div>
</template>
