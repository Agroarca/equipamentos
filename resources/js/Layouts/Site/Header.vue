<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Menu from "./Menu.vue";

</script>

<template>
    <div class="header">
        <div class="header-contact py-2">
            <div class="container contact-container d-flex flex-nowrap">
                <span class="phone"><i class="fas fa-phone-alt"></i>+55 54 9902-0345</span>
                <span class="mail"><i class="fas fa-envelope"></i>contato@agroarca.com.br</span>
                <Link class="painel" :href="route('login')">
                    <i class="fa-solid fa-chart-line"></i>
                    <span class="d-none d-sm-inline">Acessar o Painel</span>
                </Link>
            </div>
        </div>
    </div>
    <header class="py-0 py-md-3 mb-4 navbar navbar-expand-md d-block">
        <div class="container-fluid main flex-wrap flex-md-nowrap">
            <div class="header-item text-decoration-none logo-container order-1">
                <Link :href="route('site.inicio')">
                    <img class="logo" src="/img/logo.png">
                </Link>
            </div>
            <div class="header-item search-container input-group order-5 order-md-2">
                <input placeholder="Pequisar produtos..." type="text" class="search form-control">
                <button type="submit"><i class="fa fa-search"></i></button>
            </div>
            <Link class="header-item profile-container order-4" :href="route('site.perfil')">
                <i class="fas fa-user-circle"></i>
                <span class="d-none d-xl-block">Minha Conta</span>
            </Link>
            <button class="header-item menu-container menu-button navbar-toggler collapsed order-4 d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarmenu" aria-controls="navbarmenu" aria-expanded="false" aria-label="Mostrar Menu">
                <div class="d-flex flex-nowrap">
                    <span class="fa-solid fa-bars"></span>
                </div>
            </button>
        </div>

        <Menu />
    </header>
</template>
