<script setup lang="ts">
import { ref } from 'vue'

const active = ref(false)

function show() {
    active.value = true
}

function hide() {
    active.value = false
}

window.loader = { show, hide, active }
</script>

<template>
    <Transition name="loader" duration="300">
        <div v-if="active" class="loader">
            <div class="elemento" />
        </div>
    </Transition>
</template>
