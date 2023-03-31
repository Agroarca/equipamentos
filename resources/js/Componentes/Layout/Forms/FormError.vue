<script setup lang="ts">
defineProps({
    error: String,
})
</script>

<template>
    <div v-if="error">
        <p class="erro">
            {{ error }}
        </p>
    </div>
</template>
