<script setup lang="ts">

const props = defineProps({
    grupo: Object,
})
</script>

<template>
    <div class="permissao">
        <span>{{ grupo.nome }}</span>
        <div class="lista">
            <div v-for="permissao in grupo.permissoes" :key="permissao.chave" class="item">
                <input :id="`${permissao.chave}`" type="checkbox">
                <label :for="permissao.chave">{{ permissao.nome }}</label>
            </div>
        </div>
        <div class="px-4">
            <Permissao v-for="subgrupo in grupo.grupos" :key="subgrupo.chave" :grupo="subgrupo" />
        </div>
    </div>
</template>
