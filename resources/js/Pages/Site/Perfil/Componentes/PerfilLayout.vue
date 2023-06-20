<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import SiteLayout from '@/Layouts/SiteLayout.vue'

const props = defineProps({
    titulo: String,
    pagina: String,
})

const PESSOA_FISICA = 0

let { nome } = usePage().props.auth.user
if (usePage().props.auth.user.tipo_pessoa === PESSOA_FISICA) {
    [nome] = nome.split(' ')
}
</script>

<template>
    <SiteLayout :titulo="titulo" noindex>
        <div class="container">
            <h2 class="text-center mb-4">
                Olá {{ nome }}
            </h2>
            <div class="d-flex flex-md-row flex-column w-100 mx-auto justify-content-center">
                <nav class="d-flex flex-column me-5">
                    <Link class="btn mb-3" href="/perfil" :class="{ 'btn-primary': pagina === 'perfil', 'btn-secondary': pagina !== 'perfil' }">
                        Meus dados
                    </Link>
                    <Link class="btn mb-3" href="/perfil/equipamentos" :class="{ 'btn-primary': pagina === 'equipamentos', 'btn-secondary': pagina !== 'equipamentos' }">
                        Meus equipamentos
                    </Link>
                    <Link class="btn mb-3 btn-secondary" href="/equipamento/cadastrar">
                        Anunciar equipamento
                    </Link>
                    <Link class="btn mb-3 btn-danger align-self-start" href="/sair">
                        Sair
                    </Link>
                </nav>
                <slot />
            </div>
        </div>
    </SiteLayout>
</template>
