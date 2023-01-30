<script setup>
    import { ref, onMounted } from 'vue'
    import { Toast } from 'bootstrap';
    import { router } from '@inertiajs/vue3';

    const props = defineProps(['id', 'titulo', 'texto'])
    const toast = ref(null)
    let bsToast

    onMounted(() => {
        bsToast = new Toast(toast.value)
        bsToast.show({autohide: false})
    })

    function onClick(){
        router.visit(route('site.notificacao', [props.id]))
    }
</script>

<template>
    <div class="toast notificacao" ref="toast" role="alert" @click="onClick">
        <div class="toast-header">
            <span class="me-auto">{{ titulo }}</span>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {{ texto }}
        </div>
    </div>
</template>
