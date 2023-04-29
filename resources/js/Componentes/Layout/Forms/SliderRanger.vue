<script  setup lang="ts">
/* eslint-disable vuejs-accessibility/form-control-has-label */
import Slider from '@vueform/slider'
import { onMounted, ref } from 'vue'
import Mask from '@/Componentes/Helper/InputMask'

const props = defineProps({
    minimo: Number,
    maximo: Number,
    step: {
        type: Number,
        default: 1000,
    },
    inicialMinimo: null,
    inicialMaximo: null,
    tooltips: Boolean,
    inputMask: String,
    showInputs: Boolean,
})

let values = ref([
    props.inicialMinimo ?? props.minimo,
    props.inicialMaximo ?? props.maximo,
])

const minFormat = ref(null)
const maxFormat = ref(null)

onMounted(() => {
    if (props.inputMask) {
        Mask[props.inputMask](minFormat.value)
        Mask[props.inputMask](maxFormat.value)
    }
})

const emit = defineEmits<{(e: 'charge', value: Array<Number>): void}>()

function slide(sliderValues: Array<Number>) {
    values.value = sliderValues
}

function change(sliderValues: Array<Number>) {
    values.value = sliderValues
    emit('charge', sliderValues)
}

</script>

<template>
    <div>
        <Slider
            v-model="values"
            :min="minimo"
            :max="maximo"
            :step="step"
            :tooltips="tooltips"
            @slide="slide"
            @change="change" />

        <div v-if="showInputs" class="inputs mt-2">
            <span class="d-block">de: </span><input ref="minFormat" v-model="values[0]" class="form-control" type="text" name="min" @change="change(values)">
            <span class="d-block">até: </span><input ref="maxFormat" v-model="values[1]" class="form-control" type="text" name="max" @change="change(values)">
        </div>
    </div>
</template>

<style scoped>

.inputs {
    display: grid;
    grid-template-columns: 32px auto;
    align-items: center;
}

</style>
