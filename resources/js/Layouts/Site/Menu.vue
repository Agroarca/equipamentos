<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'

</script>

<template>
    <nav>
        <div class="container-fluid menu-container">
            <div id="navbarmenu" class="row menu-content collapse navbar-collapse">
                <ul class="menu navbar-nav">
                    <li class="nav-item" />
                    <li v-for="menuLink in usePage().props.site.menu" :key="menuLink.id" class="nav-item">
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
