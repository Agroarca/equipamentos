<script setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps(['links'])
</script>

<template>
    <nav v-if="links.length > 3">
        <ul class="pagination">
            <li v-for="(link, p) in links" :key="p" class="page-item" :class="{ active: link.active, disabled: link.url == null }">
                <Link :href="link.url" class="page-link">
                    <span v-html="link.label" />
                </Link>
            </li>
        </ul>
    </nav>
</template>
