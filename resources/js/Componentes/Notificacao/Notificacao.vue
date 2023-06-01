<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Toast } from 'bootstrap'
import { router } from '@inertiajs/vue3'

const props = defineProps({
    id: Number,
    titulo: String,
    texto: String,
})
const toast = ref(null)
let bsToast

onMounted(() => {
    bsToast = new Toast(toast.value)
    bsToast.show({ autohide: false })
})

function onClick() {
    router.visit('/notificacoes')
}
</script>

<template>
    <div ref="toast" class="toast notificacao" role="alert" @click="onClick">
        <div class="toast-header">
            <span class="me-auto">{{ titulo }}</span>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
        <div class="toast-body">
            {{ texto }}
        </div>
    </div>
</template>
