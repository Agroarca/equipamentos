<script setup lang="ts">
/* eslint-disable vue/no-restricted-html-elements */
import { Link, router, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'
import Menu from './Menu.vue'
import EventoNotificacaoWS from '@/Componentes/Eventos/EventoNotificacaoWS'
import Listener from '@/Componentes/Eventos/Listener'

const TIPO_USUARIO_ADMIN = 1
const isAdmin = usePage()?.props?.auth?.user?.tipo_usuario === TIPO_USUARIO_ADMIN

let pesquisa = ref('')
let qtdNotificacoesUsuario = ref(usePage().props.auth.notificacoes)

function pesquisar() {
    if (pesquisa.value.trim()) {
        router.visit(`/pesquisa/${pesquisa.value}`)
    }
}

EventoNotificacaoWS.addListener(new Listener(eventoNotificacao, 'layouts.site.header'))
function eventoNotificacao(e: EventoNotificacaoWS) {
    qtdNotificacoesUsuario.value = e.qtdNotificacoesUsuario
}
</script>

<template>
    <div class="header">
        <div class="header-contact py-2">
            <div class="container contact-container d-flex flex-nowrap">
                <a :href="usePage().props.site.contato.link" class="phone" target="_blank" rel="noopener noreferrer" aria-label="Clique para falar conosco no Whatsapp">
                    <i class="fa-brands fa-whatsapp" />
                    {{ usePage().props.site.contato.telefone }}
                </a>
                <Link v-if="isAdmin" class="painel ms-3" href="/admin/dashboard">
                    <i class="fa-solid fa-chart-line" />
                    <span class="d-none d-sm-inline">Acessar o Painel</span>
                </Link>
            </div>
        </div>
        <header class="py-0 py-md-3 mb-4 navbar navbar-expand-md d-block pb-1 pb-md-0">
            <div class="container-fluid main flex-wrap flex-md-nowrap">
                <div class="header-item text-decoration-none logo-container order-1">
                    <Link href="/">
                        <img class="logo" src="/img/logo.png" alt="Página Inicial">
                    </Link>
                </div>
                <div class="header-item search-container input-group order-5 order-md-2">
                    <form class="d-flex w-100" @submit.prevent="pesquisar()">
                        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                        <input v-model="pesquisa" required placeholder="Pesquisar produtos..." type="text" class="search form-control">
                        <button type="submit">
                            <i class="fa fa-search" />
                        </button>
                    </form>
                </div>
                <Link class="header-item header-btn profile-container order-4" href="/perfil">
                    <i class="fas fa-user-circle" />
                    <span class="d-none d-xxl-block">Minha Conta</span>
                </Link>
                <Link class="header-item header-btn notificacao-container order-4" href="/notificacoes">
                    <i class="far fa-bell position-relative">
                        <span v-if="qtdNotificacoesUsuario > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            {{ qtdNotificacoesUsuario }}
                            <span class="visually-hidden">Não Lidas</span>
                        </span>
                    </i>
                    <span class="d-none d-xxl-block">Notificações</span>
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
