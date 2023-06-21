<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'

let linksMenu = ref(usePage().props.site.menu)

if (linksMenu.value.length === 0) {
    linksMenu.value = [
        { id: 1, nome: 'Todos os equipamentos', link: '/categoria' },
        { id: 2, nome: 'Anunciar um equipamento', link: '/equipamento/cadastrar' },
    ]
}

</script>

<template>
    <nav>
        <div class="container-fluid menu-container">
            <div id="navbarmenu" class="row menu-content collapse navbar-collapse">
                <ul class="menu navbar-nav">
                    <li class="nav-item" />
                    <li v-for="menuLink in linksMenu" :key="menuLink.id" class="nav-item">
                        <Link class="menu-item" :href="menuLink.link">
                            {{ menuLink.nome }}
                        </Link>
                    </li>
                    <li class="nav-item" />
                </ul>
            </div>
        </div>
    </nav>
</template>
