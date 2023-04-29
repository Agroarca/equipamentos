<script setup lang="ts">
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    links: Array,
})

</script>

<template>
    <nav v-if="links.length > 2" aria-label="Paginação">
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item">
                <Link class="page-link" :href="link.url" :class="{ disabled: !link.url, active: link.active }">
                    {{ link.label }}
                </Link>
            </li>
        </ul>
    </nav>
</template>
