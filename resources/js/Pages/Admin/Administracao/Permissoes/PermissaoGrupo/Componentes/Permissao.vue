<script setup lang="ts">

const props = defineProps({
    permissao: Object,
})
</script>

<template>
    <div class="permissao">
        <span>{{ permissao.nome }}</span>
        <div class="lista">
            <div v-for="(item, index) in permissao.permissoes" :key="index" class="item">
                <input :id="`${permissao.chave}:${item}`" type="checkbox" :checked="item.checked" @change="alterar(item)">
                <label :for="item.id">{{ item.nome }}</label>
            </div>
        </div>
    </div>
</template>
