<script  setup lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
/* eslint-disable vue/require-prop-types  */
import { anyTypeAnnotation } from '@babel/types'
import axios from 'axios'
import { debounce } from 'lodash'
import { ref } from 'vue'
import VueNextSelect from 'vue-next-select'
import 'vue-next-select/dist/index.css'

const props = defineProps([
    'href',
    'modelValue',
    'options',
])
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()
const options = ref([])

// options.value = props.options
const search = debounce(onSearch, 500)

const selectedOption = ref(getOpcaoSelecionada())

function onSearch(inputEvent: InputEvent) {
    console.log('onSearch')
    let termo = (inputEvent.target! as HTMLInputElement).value
    axios.get(props.href, {
        params: {
            termo,
        },
    }).then((response) => {
        options.value = response.data
    })
}

function updateModelValue() {
    emit('update:modelValue', selectedOption.value?.id)
}

function getOpcaoSelecionada() {
    if (props.modelValue) {
        return options.value.find((opcao) => opcao.id === props.modelValue)
    }
    return null
}

</script>

<template>
    <VueNextSelect
        v-model="selectedOption"
        search-placeholder="Selecione um Equipamento"
        placeholder="Selecione um Equipamento"
        class="form-control w-100"
        :options="options"
        close-on-select
        searchable
        label-by="texto"
        @update:model-value="updateModelValue"
        @search:input="search" />
</template>
