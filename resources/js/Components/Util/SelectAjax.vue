<script  setup lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
/* eslint-disable vue/require-prop-types  */
import 'vue-next-select/dist/index.css'
import axios from 'axios'
import { debounce } from 'lodash'
import { ref } from 'vue'
import VueNextSelect from 'vue-next-select'

const props = defineProps([
    'href',
    'modelValue',
    'options',
    'placeholder',
])

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()
const options = ref([])
const loading = ref(false)
const search = debounce(onSearch, 300, { maxWait: 1000 })
const selectedOption = ref(getOpcaoSelecionada())

options.value = props.options ?? []

function onSearch(inputEvent: InputEvent) {
    let termo = (inputEvent.target as HTMLInputElement).value
    loading.value = true
    axios.get(props.href, {
        params: {
            termo,
        },
    }).then((response) => {
        options.value = response.data
    }).finally(() => {
        loading.value = false
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
        :search-placeholder="placeholder"
        :placeholder="placeholder"
        class="form-control w-100"
        :options="options"
        close-on-select
        searchable
        label-by="texto"
        :loading="loading"
        @update:model-value="updateModelValue"
        @search:input="search" />
</template>
