<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Mask from './InputMask'

const props = defineProps({
    tipo: String,
    valor: String,
})

const elValor = ref(null)

onMounted(() => {
    Mask[props.tipo](elValor.value)
})

</script>

<template>
    <span ref="elValor">{{ valor }}</span>
</template>
