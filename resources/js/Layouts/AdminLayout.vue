<script setup lang="ts">
import '../../css/admin.css'

import { Head, Link, usePage } from '@inertiajs/vue3'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Offcanvas } from 'bootstrap'
import Loader from '@/Components/Loader.vue'
import BaseLayout from './BaseLayout.vue'

const menus = computed(() => usePage().props.admin.menus)
const props = defineProps({
    titulo: String,
    link: String,
    buttonText: String,

})

const elOffcanvas = ref(null)
let offcanvas
onMounted(() => {
    offcanvas = new Offcanvas(elOffcanvas.value)
})

onUnmounted(() => {
    // Correção de bug do overflow hidden após clicar nos menus
    offcanvas.hide()
})

</script>

<template>
    <div class="admin-layout">
        <BaseLayout>
            <Loader />
            <header class="main-header navbar sticky-top bg-light flex-md-nowrap p-0 shadow">
                <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" :href="route('admin.dashboard')">
                    Equipamentos
                </Link>

                <button class="navbar-toggler collapsed ms-2 me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#main-menu"
                        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" />
                </button>

                <div class="navbar-nav">
                    <div class="nav-item text-nowrap">
                        <Link class="nav-link px-3" :href="route('logout')">
                            Sair
                        </Link>
                    </div>
                </div>
            </header>
            <aside>
                <nav id="main-menu" ref="elOffcanvas" class="offcanvas offcanvas-start" tabindex="-1" aria-labelledby="main-menu-label">
                    <div class="offcanvas-header menu-header">
                        <h5 id="main-menu-label" class="offcanvas-title">
                            Equipamentos
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar" />
                    </div>
                    <div class="offcanvas-body">
                        <ul class="nav flex-column">
                            <li v-for="menu in menus" :key="menu.title" class="nav-item">
                                <Link class="nav-link" :href="route(menu.route)">
                                    {{ menu.title }}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
            <div class="admin-wrapper">
                <main class="container pt-3">
                    <slot name="header">
                        <Head :title="titulo" />
                        <header v-if="link" class="row pb-4">
                            <div class="col-sm-8">
                                <h1>{{ titulo }}</h1>
                            </div>
                            <div class="col-sm-4 pt-3 pt-sm-0">
                                <Link :href="link" class="btn btn-primary float-sm-end">
                                    <i class="fas fa-plus-circle pr-1" /> {{ buttonText }}
                                </Link>
                            </div>
                        </header>
                        <header v-else class="pb-4">
                            <h1>{{ titulo }}</h1>
                        </header>
                    </slot>

                    <article>
                        <slot />
                    </article>
                </main>
            </div>
        </BaseLayout>
    </div>
</template>

<style scoped>
body {
    background-color: #f4f6f9;
}
</style>
