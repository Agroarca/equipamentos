<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'
import CarrosselInicio from '../CarrosselPrincipal/Inicio.vue'

const props = defineProps({
    versao: Object,
})

</script>

<template>
    <AdminLayout :titulo="`Layout da Versão ${versao.id}`">
        <CarrosselInicio :versao="versao" />
    </AdminLayout>
</template>
