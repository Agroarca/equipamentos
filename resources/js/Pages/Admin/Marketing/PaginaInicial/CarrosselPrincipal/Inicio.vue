<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import AccordionItem from './Componentes/AccordionItem.vue'

const props = defineProps({
    versao: Object,
})

</script>

<template>
    <div class="card card-default overflow-hidden">
        <div class="card-header d-flex flex-col justify-content-between align-items-center">
            <h5 class="card-title m-0">
                Carrossel
            </h5>
            <Link class="btn btn-primary" :href="`/admin/marketing/pagina/inicial/${versao.id}/layout/carrossel/adicionar`">
                <i class="fas fa-plus-circle pe-1" />
                Adicionar Imagem
            </Link>
        </div>
        <div class="card-body p-0">
            <div id="accordion-carrossel-principal" class="accordion accordion-flush">
                <AccordionItem v-for="item in versao.carrossel_itens" :key="item.id" :versao="versao" :item="item" />
            </div>
        </div>
    </div>
</template>
