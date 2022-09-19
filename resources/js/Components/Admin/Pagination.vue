<script setup>
    import { Link } from '@inertiajs/inertia-vue3';
    const props = defineProps(['links']);
</script>

<template>
    <nav v-if="links.length > 3">
        <ul class="pagination">
            <li class="page-item" v-for="(link, p) in links" :key="p" :class="{'active': link.active, 'disabled': link.url == null}">
                <Link :href="link.url" class="page-link" >
                    <span v-html="link.label"></span>
                </Link>
            </li>
        </ul>
    </nav>
</template>
