<script setup lang="ts">
/* eslint-disable vue/no-restricted-html-elements */
import { Link, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'
import Menu from './Menu.vue'
import Pesquisa from './Pesquisa.vue'
import EventoNotificacaoWS from '@/Componentes/Eventos/EventoNotificacaoWS'
import Listener from '@/Componentes/Eventos/Listener'

const TIPO_USUARIO_ADMIN = 1
const isAdmin = usePage()?.props?.auth?.user?.tipo_usuario === TIPO_USUARIO_ADMIN

let qtdNotificacoesUsuario = ref(usePage().props.auth.notificacoes)
let usuarioLogado = ref(usePage().props.auth.user)

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
                    <strong>{{ usePage().props.site.contato.telefone }}</strong>
                    <span class="ps-2">Fale conosco! </span>
                </a>
                <Link v-if="isAdmin" class="painel ms-3" href="/admin/dashboard">
                    <i class="fa-solid fa-chart-line" />
                    <span class="d-none d-sm-inline">Acessar o painel</span>
                </Link>
            </div>
        </div>
        <header class="mb-4 navbar navbar-expand-md d-block">
            <div class="container-fluid main flex-wrap flex-md-nowrap">
                <div class="header-item text-decoration-none logo-container order-1">
                    <Link class="logo-container" href="/">
                        <picture>
                            <source srcset="/img/logo_325x100.webp" type="image/webp" media="(min-width: 1399.98px)">
                            <source srcset="/img/logo_325x100.png" type="image/png" media="(min-width: 1399.98px)">
                            <source srcset="/img/logo_130x40.webp" type="image/webp">
                            <img class="logo" src="/img/logo_130x40.png" alt="Página Inicial" width="325" height="100">
                        </picture>
                    </Link>
                </div>
                <Pesquisa />
                <Link class="header-item header-btn profile-container order-4" href="/perfil" aria-label="Acessar minha conta">
                    <i class="fas fa-user-circle" />
                    <span class="d-none d-xxl-block">Minha conta</span>
                </Link>
                <Link v-if="usuarioLogado" class="header-item header-btn notificacao-container order-4" href="/notificacoes">
                    <i class="far fa-bell position-relative">
                        <span v-if="qtdNotificacoesUsuario > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            {{ qtdNotificacoesUsuario }}
                            <span class="visually-hidden">Não lidas</span>
                        </span>
                    </i>
                    <span class="visually-hidden">Notificações</span>
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
