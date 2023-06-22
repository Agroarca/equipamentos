<script setup lang="ts">
import '../../css/site.css'
import { Head } from '@inertiajs/vue3'
import { computed } from 'vue'
import BaseLayout from './BaseLayout.vue'
import Loader from '@/Componentes/Layout/Loader.vue'
import Header from './Site/Header.vue'
import Footer from './Site/Footer.vue'

const props = defineProps({
    titulo: String,
    metaDescription: {
        type: String,
        default: 'Encontre o equipamento agrícola usado ideal para você expandir seu negócio! Veja nossas opções de tratores, colheitadeiras, plantadeiras e mais',
    },
    noindex: Boolean,
    dadosEstruturados: Object,
})

const tituloPagina = computed(() => (props.titulo ? `${props.titulo} | Compra e venda de equipamentos agrícolas usados` : 'Compra e venda de equipamentos agrícolas usados'))
const URLAtual = computed(() => window.location.href)

</script>

<template>
    <div class="site-layout">
        <Head :title="tituloPagina">
            <meta name="description" head-key="meta-description" :content="metaDescription" />
            <meta v-if="noindex" name="robots" head-key="meta-robots" content="noindex, nofollow" />
            <meta v-else name="robots" head-key="meta-robots" content="index, follow" />
            <meta name="og:title" head-key="meta-og-title" :content="tituloPagina" />
            <meta name="og:site_name" head-key="meta-og-site_name" content="Agroarca" />
            <meta name="og:description" head-key="meta-og-description" :content="metaDescription" />
            <meta name="og:url" head-key="meta-og-url" :content="URLAtual" />
            <meta name="og:type" head-key="meta-og-type" content="website" />
            <meta name="og:image" head-key="meta-og-image" content="https://agroarca.com.br/img/logo-vertical.png" />
            <meta name="og:image:type" head-key="meta-og-image-type" content="image/png" />
            <meta name="og:image:width" head-key="meta-og-image-width" content="512" />
            <meta name="og:image:height" head-key="meta-og-image-height" content="512" />
            <meta name="og:image:alt" head-key="meta-og-image-alt" content="Agroarca Equipamentos" />
        </Head>
        <Teleport to="head">
            <component :is="'script' + ''" type="application/ld+json">
                {{
                    // `Solução Alternativa` pra carregar isso dinamicamente
                    JSON.stringify(dadosEstruturados)
                }}
            </component>
        </Teleport>
        <BaseLayout>
            <Loader />
            <Header />
            <slot />
            <Footer />
        </BaseLayout>
    </div>
</template>
