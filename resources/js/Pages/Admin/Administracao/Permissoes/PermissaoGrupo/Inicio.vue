<script setup lang="ts">
import AdminLayout from '@/Layouts/AdminLayout.vue'
import Permissao from './Componentes/Permissao.vue'

const props = defineProps({
    grupo: Object,
    permissoes: Array,
})

let alteracoes = []

function alterarPermissao(chave: string, valor: boolean) {
    alteracoes[chave] = valor
}
</script>

<template>
    <AdminLayout :titulo="`Permissoes de ${grupo.nome}`">
        <div class="card card-default">
            <div class="card-body p-0">
                <Permissao v-for="grupo in permissoes" :key="grupo.chave" :grupo="grupo" @alterarPermissao="alterarPermissao" />
            </div>
        </div>
    </AdminLayout>
</template>
