<script setup>
    import '../../css/admin.css'
    import BaseLayout from './BaseLayout.vue';
    import Loader from "@/Components/Loader.vue"

    import { Head, Link, usePage } from "@inertiajs/inertia-vue3";
    import { computed, onMounted, onUnmounted, ref } from "vue";
    import { Offcanvas } from 'bootstrap';

    const menus = computed(() => usePage().props.value.admin.menus)
    const props = defineProps(['titulo', 'link', 'buttonText'])

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
    <BaseLayout>
        <Loader></Loader>
        <header class="main-header navbar sticky-top bg-light flex-md-nowrap p-0 shadow">
            <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" :href="route('admin.dashboard')">Equipamentos</Link>

            <button class="navbar-toggler collapsed ms-2 me-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#main-menu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-nav">
                <div class="nav-item text-nowrap">
                    <Link class="nav-link px-3" :href="route('logout')">Sair</Link>
                </div>
            </div>
        </header>
        <aside>
            <nav class="offcanvas offcanvas-start" id="main-menu" tabindex="-1" aria-labelledby="main-menu-label" ref="elOffcanvas">
                <div class="offcanvas-header menu-header">
                    <h5 class="offcanvas-title" id="main-menu-label">Equipamentos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column">
                        <li class="nav-item" v-for="menu in menus" :key="menu.title">
                            <Link class="nav-link" :href="route(menu.route)">
                                {{menu.title}}
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
                    <header class="row pb-4" v-if="link">
                        <div class="col-sm-8">
                            <h1>{{ titulo }}</h1>
                        </div>
                        <div class="col-sm-4 pt-3 pt-sm-0">
                            <Link :href="link" class="btn btn-primary float-sm-end">
                                <i class="fas fa-plus-circle pr-1"></i> {{ buttonText }}
                            </Link>
                        </div>
                    </header>
                    <header class="pb-4" v-else>
                        <h1>{{ titulo }}</h1>
                    </header>
                </slot>

                <article>
                    <slot></slot>
                </article>
            </main>
        </div>
    </BaseLayout>
</template>

<style scoped>
body {
    background-color: #f4f6f9;
}
</style>
