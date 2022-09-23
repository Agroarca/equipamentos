<script setup>
import { Modal } from 'bootstrap';
import { onMounted, ref } from 'vue';

const elModal = ref(null);
const props = defineProps([
    'id',
    'title',
    'modalSizeClass'
])
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
    show: show,
    hide: hide
})
</script>

<template>
    <div :id="id" class="modal fade" tabindex="-1" ref="elModal">
        <div class="modal-dialog" :class="modalSizeClass">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header">
                        <h5 class="modal-title">{{ title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </slot>
                </div>
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>
