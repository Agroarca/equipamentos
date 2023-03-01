<script setup lang="ts">
import { Modal } from 'bootstrap'
import { onMounted, ref } from 'vue'

const elModal = ref(null)
const props = defineProps({
    id: Number,
    title: String,
    modalSizeClass: String,
})
let modal

onMounted(() => {
    modal = new Modal(elModal.value)
})

function show() {
    modal.show()
}

function hide() {
    modal.hide()
}

defineExpose({
    show,
    hide,
})
</script>

<template>
    <div :id="id" ref="elModal" class="modal fade" tabindex="-1">
        <div class="modal-dialog" :class="modalSizeClass">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header">
                        <h5 class="modal-title">
                            {{ title }}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar" />
                    </slot>
                </div>
                <div class="modal-body">
                    <slot />
                </div>
                <div class="modal-footer">
                    <slot name="footer" />
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
