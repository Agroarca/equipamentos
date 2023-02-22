<script setup lang="ts">
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Equipamento from './Equipamento.vue'

const props = defineProps(['equipamentos', 'title'])
</script>

<template>
    <SiteLayout>
        <section class="container container-md lista">
            <div class="section-meta">
                <slot name="title">
                    <h2 v-if="title" class="section-title">
                        {{ title }}
                    </h2>
                </slot>
            </div>

            <slot>
                <template v-for="equipamento in equipamentos.data" :key="equipamento.id">
                    <Equipamento :equipamento="equipamento" />
                </template>
            </slot>
        </section>
    </SiteLayout>
</template>
