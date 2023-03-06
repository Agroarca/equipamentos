<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import Menu from './Menu.vue'

const isAdmin = usePage().props?.auth?.user?.tipo_usuario === 1
</script>

<template>
    <div class="header">
        <div class="header-contact py-2">
            <div class="container contact-container d-flex flex-nowrap">
                <span class="phone"><i class="fas fa-phone-alt" />+55 54 9902-0345</span>
                <span class="mail"><i class="fas fa-envelope" />contato@agroarca.com.br</span>
                <Link v-if="isAdmin" class="painel" href="/login">
                    <i class="fa-solid fa-chart-line" />
                    <span class="d-none d-sm-inline">Acessar o Painel</span>
                </Link>
            </div>
        </div>
        <header class="py-0 py-md-3 mb-4 navbar navbar-expand-md d-block">
            <div class="container-fluid main flex-wrap flex-md-nowrap">
                <div class="header-item text-decoration-none logo-container order-1">
                    <Link href="/">
                        <img class="logo" src="/img/logo.png" alt="Página Inicial">
                    </Link>
                </div>
                <div class="header-item search-container input-group order-5 order-md-2">
                    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                    <input placeholder="Pequisar produtos..." type="text" class="search form-control">
                    <button type="submit">
                        <i class="fa fa-search" />
                    </button>
                </div>
                <Link class="header-item profile-container order-4" href="/perfil">
                    <i class="fas fa-user-circle" />
                    <span class="d-none d-xl-block">Minha Conta</span>
                </Link>
                <button class="header-item menu-container menu-button navbar-toggler collapsed order-4 d-block d-md-none"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarmenu" aria-controls="navbarmenu"
                        aria-expanded="false" aria-label="Mostrar Menu">
                    <div class="d-flex flex-nowrap">
                        <span class="fa-solid fa-bars" />
                    </div>
                </button>
            </div>

            <Menu />
        </header>
    </div>
</template>
