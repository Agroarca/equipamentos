<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Permissao from './Componentes/Permissao.vue'

const props = defineProps({
    grupo: Object,
    permissoes: Array,
})
</script>

<template>
    <AdminLayout :titulo="`Permissoes de ${grupo.nome}`">
        <div class="card card-default">
            <div class="card-body p-0">
                <Permissao v-for="permissao in permissoes" :key="permissao.chave" :permissao="permissao" :grupo="grupo" />
            </div>
        </div>
    </AdminLayout>
</template>
