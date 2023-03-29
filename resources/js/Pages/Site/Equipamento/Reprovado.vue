<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'

const props = defineProps({
    equipamento: Object,
})

</script>

<template>
    <SiteLayout titulo="Equipamento Reprovado">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>
                        Motivo da Reprovação
                    </h2>
                    <div v-html="equipamento.motivo_reprovado" />
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
