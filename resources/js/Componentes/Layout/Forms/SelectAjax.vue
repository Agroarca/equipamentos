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

const emit = defineEmits<{(e: 'update:modelValue', value: string): void,
    (e: 'criarNovaOpcao', value: string): void
}>()

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

        if (!props.criarDinamica) {
            return
        }

        if (search.trim().length === 0) {
            return
        }

        let opcoesEncontradas = options.value.filter((opcao) => opcao.texto.localeCompare(search)).length
        if (opcoesEncontradas === 0) {
            options.value.push({ id: null, texto: `Criar nova opção "${search}"` })
        }
    }).finally(() => {
        loading(false)
    })
}

function updateModelValue() {
    emit('update:modelValue', selectedOption.value?.id)

    if (selectedOption.value?.id === null && props.criarDinamica) {
        let option = options.value.find((opcao) => opcao.id === null)

        if (!option) {
            return
        }

        option.texto = option.texto.replace('Criar nova opção "', '').replace('"', '')
        emit('criarNovaOpcao', option.texto)
    }
}

function getOpcaoSelecionada() {
    if (props.modelValue) {
        return options.value.find((opcao) => opcao.id === props.modelValue)
    }
    return null
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
            <template v-if="searching">
                Nenhuma Opção encontrada para <em>{{ search }}</em>.
            </template>
            <em v-else>Digite para pesquisar</em>
        </template>
    </VueSelect>
</template>