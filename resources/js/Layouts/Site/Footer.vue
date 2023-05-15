<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
/* eslint-disable vue/no-restricted-html-elements */
</script>

<template>
    <div class="footer mt-4">
        <a :href="usePage().props.dados.contato.link"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Clique para falar conosco no Whatsapp"
           class="contato">
            <span class="contato-titulo me-4">
                Fale Conosco
            </span>
            <span class="contato-numero">
                <i class="fa-brands fa-whatsapp mx-1 fa-lg" />
                {{ usePage().props.dados.contato.telefone }}
            </span>
        </a>
        <div class="legal d-flex flex-column flex-md-row">
            <span class="me-md-4">Rua Marco Angonese, 121 - Atlântico</span>
            <span class="me-md-4">Erechim/RS - CEP 99705-574</span>
            <span>{{ new Date().getFullYear() }} - Todos os direitos reservados</span>
        </div>
    </div>
</template>

<style scoped>
</style>
