<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import SelectAjax from '@/Components/Util/SelectAjax.vue'

let vModel = 10
const options = [{ id: 10, texto: 'Selecionado' }, { id: 20, texto: 'Não Selecionado' }]
</script>

<template>
    <SiteLayout>
        <p>inicio</p>
        <SelectAjax v-model="vModel" :href="route('site.modelos.pesquisar')" :options="options" />
    </SiteLayout>
</template>
