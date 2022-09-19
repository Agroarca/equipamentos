<script setup>
    defineProps(['error'])
</script>

<template>
    <div v-if="error">
        <p class="erro">
            {{error}}
        </p>
    </div>
</template>