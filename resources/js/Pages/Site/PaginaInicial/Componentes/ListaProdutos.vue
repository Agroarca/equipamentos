<script setup lang="ts">
import Componente from '@/Models/Marketing/PaginaInicial/Componente'
import ComponenteBase from './ComponenteBase.vue'
import Lista from '@/Models/Marketing/PaginaInicial/ListaProdutos/Lista'
import Equipamento from '@/Pages/Site/Lista/Componentes/Equipamento.vue'

const props = defineProps({
    componente: Componente,
})

let tipo = props.componente.tipo as Lista
</script>

<template>
    <ComponenteBase :componente="componente">
        <div class="lista-produtos">
            <Equipamento v-for="equipamento in tipo.lista_produtos.equipamentos" :key="equipamento.id" class="produto-componente" :equipamento="equipamento" />
        </div>
    </ComponenteBase>
</template>
