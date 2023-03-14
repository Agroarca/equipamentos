<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Equipamento from './Equipamento.vue'
import Paginacao from '@/Components/Paginacao.vue'

const props = defineProps({
    equipamentos: Object,
    title: String,
})
</script>

<template>
    <SiteLayout :titulo="title">
        <section class="container container-md lista">
            <div class="section-meta">
                <slot name="title">
                    <h2 v-if="title" class="section-title">
                        {{ title }}
                    </h2>
                </slot>
            </div>

            <slot>
                <div class="produtos">
                    <template v-for="equipamento in equipamentos.data" :key="equipamento.id">
                        <Equipamento :equipamento="equipamento" />
                    </template>
                </div>
                <Paginacao :links="equipamentos.links" class="mt-5" />
            </slot>
        </section>
    </SiteLayout>
</template>
