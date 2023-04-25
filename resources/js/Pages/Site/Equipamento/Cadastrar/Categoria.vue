<script setup lang="ts">
import { router } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Navegacao from './Componentes/Navegacao.vue'
import EscolherCategoria from '@/Pages/Admin/Equipamentos/Cadastro/Categoria/Componentes/EscolherCategoria.vue'

function escolherCategoria(id) {
    router.visit(`/equipamento/cadastrar/categoria/${id}`)
}

</script>

<template>
    <SiteLayout titulo="Cadastrar Equipamento">
        <div class="container-600 cadastrar-equipamento">
            <h2 class="titulo text-center mb-3">
                Cadastrar Novo Equipamento
            </h2>
            <Navegacao class="mb-3 d-flex justify-content-center" :passoAtual="0" :passoCadastro="0" />
            <EscolherCategoria @escolherCategoria="escolherCategoria" />
        </div>
    </SiteLayout>
</template>
