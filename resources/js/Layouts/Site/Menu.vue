<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

</script>

<template>
    <nav>
        <div class="container-fluid menu-container">
            <div id="navbarmenu" class="row menu-content collapse navbar-collapse">
                <ul class="menu navbar-nav">
                    <li class="nav-item" />
                    <li class="nav-item">
                        <Link class="menu-item" href="/categoria">
                            Todas as Categorias
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="menu-item" :href="`/equipamento/${[1]}`">
                            Produto Exemplo
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="menu-item" href="/equipamento/categoria">
                            Cadastrar Produto
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="menu-item" href="/perfil/equipamentos">
                            Meus Equipamentos
                        </Link>
                    </li>
                    <li class="nav-item" />
                </ul>
            </div>
        </div>
    </nav>
</template>
