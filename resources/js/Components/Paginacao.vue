<script setup>
import { Link } from '@inertiajs/vue3'

const props = defineProps(['links'])
</script>

<template>
    <nav aria-label="Paginação">
        <ul class="pagination">
            <li v-for="link in links" :key="link.label" class="page-item">
                <Link class="page-link" :href="link.url" :class="{ disabled: !link.url, active: link.active }">
                    {{ link.label }}
                </Link>
            </li>
        </ul>
    </nav>
</template>
