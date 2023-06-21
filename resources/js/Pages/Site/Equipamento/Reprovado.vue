<script setup lang="ts">
/* eslint-disable vue/no-v-html */
import SiteLayout from '@/Layouts/SiteLayout.vue'

const props = defineProps({
    equipamento: Object,
})

</script>

<template>
    <SiteLayout titulo="Equipamento reprovado">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>
                        Motivo da reprovação
                    </h2>
                    <div v-html="equipamento.motivo_reprovado" />
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
