<script  setup lang="ts">
import Slider from '@vueform/slider'

const props = defineProps({
    value: Array,
    min: Number,
    max: Number,
    step: Number,
    tooltips: Boolean,
})

const emit = defineEmits<{(e: 'slide', value: any): void}>()

function slide(value: any) {
    emit('slide', value)
}
</script>

<template>
    <Slider
        :value="props.value"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :tooltips="props.tooltips"
        @slide="slide" />
</template>
