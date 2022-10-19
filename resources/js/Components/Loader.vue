<script setup>
import {ref} from 'vue'
let active = ref(false);

function show() {
    active.value = true;
}

function hide() {
    active.value = false;
}

window.loader = {show, hide, active};
</script>

<template>
    <Transition name="loader" duration="300">
        <div class="loader" v-if="active">
            <div class="elemento">
            </div>
        </div>
    </Transition>
</template>
