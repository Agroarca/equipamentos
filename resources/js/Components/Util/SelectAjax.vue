<script  setup lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
/* eslint-disable vue/require-prop-types  */
import { anyTypeAnnotation } from '@babel/types'
import axios from 'axios'
import { debounce } from 'lodash'
import { ref } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const props = defineProps([
    'href',
    'modelValue',
    'options',
])
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()
const options = ref([])
options.value = props.options
const search = debounce(onSearch, 500)

const selectedOption = ref(getOpcaoSelecionada())

function onSearch(termo, loading) {
    axios.get(props.href, {
        params: {
            termo,
        },
    }).then((response) => {
        loading(false)
        options.value = response.data
    })
}

function updateModelValue() {
    emit('update:modelValue', selectedOption.value.id)
}

function getOpcaoSelecionada() {
    if (props.modelValue) {
        return options.value.find((opcao) => opcao.id === props.modelValue)
    }
    return null
}

</script>

<template>
    <v-select v-model="selectedOption" label="texto" :options="options" @search="search" @option:selected="updateModelValue">
        <template #no-options="{ searching }">
            <template v-if="searching">
                Nenhum um resultado encontrado..
            </template>
            <em v-else>Digite Para Pesquisar</em>
        </template>
    </v-select>
</template>
