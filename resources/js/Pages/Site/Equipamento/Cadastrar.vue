<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import CadastrarImagens from './Parcial/CadastrarImagens.vue'
import CadastrarNovo from './Parcial/CadastrarNovo.vue'
import CadastrarDescricao from './Parcial/CadastrarDescricao.vue'
import CadastrarCaracteristicas from './Parcial/CadastrarCaracteristicas.vue'

const props = defineProps({
    equipamento: Object,
    categorias: Object,
})
function continuar() {

}
</script>

<template>
    <SiteLayout titulo="Cadastrar Equipamento">
        <CadastrarNovo v-if="!equipamento" :categorias="categorias" />
        <CadastrarImagens v-if="equipamento?.passo_cadastro == 2" :equipamento="equipamento" />
        <CadastrarDescricao v-if="equipamento?.passo_cadastro == 3" :equipamento="equipamento" />
        <!-- <CadastrarCaracteristicas v-if="equipamento?.passo_cadastro == 4" :equipamento="equipamento" /> -->
    </SiteLayout>
</template>
