<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'

const props = defineProps({
    titulo: String,
    pagina: String,
})
</script>

<template>
    <SiteLayout :titulo="titulo">
        <div class="container">
            <h2 class="text-center">
                Olá {{ usePage().props.auth.user.nome }}
            </h2>
            <div class="d-flex flex-md-row flex-column w-100">
                <nav class="d-flex flex-column align-items-start me-5">
                    <Link class="btn mb-3" href="/perfil" :class="{ 'btn-primary': pagina === 'perfil', 'btn-secondary': pagina !== 'perfil' }">
                        Meus Dados
                    </Link>
                    <Link class="btn mb-3" href="/perfil/equipamentos" :class="{ 'btn-primary': pagina === 'equipamentos', 'btn-secondary': pagina !== 'equipamentos' }">
                        Meus Equipamentos
                    </Link>
                    <Link class="btn mb-3 btn-secondary" href="/equipamento/cadastrar">
                        Anunciar Equipamento
                    </Link>
                    <Link class="btn mb-3 btn-danger" href="/sair">
                        Sair
                    </Link>
                </nav>
                <div class="d-flex flex-fill flex-column">
                    <slot />
                </div>
            </div>
        </div>
    </SiteLayout>
</template>
