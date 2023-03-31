<script setup lang="ts">
import Paginacao from '@/Componentes/Layout/Listas/Paginacao.vue'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import EquipamentoPerfil from '@/Pages/Site/Perfil/Componentes/EquipamentoPerfil.vue'

const props = defineProps({
    equipamentos: Object,
    status: Array,
})

</script>

<template>
    <SiteLayout titulo="Perfil">
        <h2 class="text-center">
            Meus Equipamentos
        </h2>
        <section class="container container-md lista">
            <slot>
                <div class="container equipamentos">
                    <div class="lista">
                        <template v-for="equipamento in equipamentos.data" :key="equipamento.id">
                            <EquipamentoPerfil :equipamento="equipamento" :status="status" />
                        </template>
                    </div>
                </div>
                <Paginacao :links="equipamentos.links" class="mt-5" />
            </slot>
        </section>
    </SiteLayout>
</template>
