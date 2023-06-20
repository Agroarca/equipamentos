<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import Inicio from '@/Pages/Site/PaginaInicial/Inicio.vue'

const props = defineProps({
    versao: Object,
})

</script>

<template>
    <div class="visualizar">
        <Link href="/admin/marketing/pagina/inicial" class="position-sticky top-0 left-50 text-decoration-none z-index-1000">
            <div class="display-flex flex-column text-center bg-danger text-white py-2">
                <span>Modo de visualização</span>
                <div>
                    <i class="fas fa-circle-left me-2" />
                    Ir para a lista de versões
                </div>
            </div>
        </Link>
        <Inicio :versaoPaginaInicial="versao" />
    </div>
</template>
