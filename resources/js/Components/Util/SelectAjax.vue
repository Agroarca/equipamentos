<script  setup lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
/* eslint-disable vue/require-prop-types  */
import axios from 'axios'
import { debounce } from 'lodash'
import { ref } from 'vue'
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const props = defineProps([
    'href',
    'modelValue',
    'options',
    'placeholder',
    'criarDinamica',
])

const emit = defineEmits<{(e: 'update:modelValue', value: string): void, (e: 'criarNovaOpcao', value: string): void}>()
const options = ref([])
const onSearch = debounce(onSearchDebounced, 300, { maxWait: 1000 })
const selectedOption = ref(getOpcaoSelecionada())

options.value = props.options ?? []

function onSearchDebounced(search, loading) {
    loading(true)
    axios.get(props.href, {
        params: {
            termo: search,
        },
    }).then((response) => {
        options.value = response.data
    }).finally(() => {
        loading(false)
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

function criarOpcao(search) {
    emit('update:modelValue', null)
    emit('criarNovaOpcao', search)
}
</script>

<template>
    <VueSelect
        v-model="selectedOption"
        :placeholder="placeholder ?? 'Selecione uma Opção'"
        :options="options"
        label="texto"
        searchable
        @update:model-value="updateModelValue"
        @search="onSearch">
        <template #no-options="{ search, searching }">
            <template v-if="searching && !criarDinamica">
                Nenhuma Opção encontrada para <em>{{ search }}</em>.
            </template>
            <template v-if="searching && criarDinamica">
                <ul class="NovaOpcao" @click="criarOpcao">
                    Criar nova opção <em>{{ search }}</em>.
                </ul>
            </template>
            <em v-else>Digite para pesquisar</em>
        </template>
    </VueSelect>
</template>
