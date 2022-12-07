<script setup>
import { Link } from "@inertiajs/inertia-vue3";

</script>

<template>
<nav>
    <div class="container-fluid menu-container">
        <div class="row menu-content collapse navbar-collapse" id="navbarmenu">
            <ul class="menu navbar-nav">
                <li class="nav-item"></li>
                <li class="nav-item">
                    <Link class="menu-item" :href="route('site.inicio')">Todas as Categorias</Link>
                </li>
                <li class="nav-item">
                    <Link class="menu-item" :href="route('site.equipamento', [1])">Produto Exemplo</Link>
                </li>
                <li class="nav-item"></li>
            </ul>
        </div>
    </div>
</nav>
</template>
