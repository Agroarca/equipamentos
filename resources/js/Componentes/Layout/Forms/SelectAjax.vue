<script  setup lang="ts">
import axios from 'axios'
import { debounce } from 'lodash'
import { onMounted, ref, watch } from 'vue'
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const props = defineProps({
    href: String,
    modelValue: null,
    options: Array,
    placeholder: String,
    criarDinamica: Boolean,
    preBusca: Boolean,
    disabled: Boolean,
})

const emit = defineEmits<{(e: 'update:modelValue', value: string): void,
    (e: 'criarNovaOpcao', value: string): void,
    (e: 'optionSelected', value: string): void
}>()

const selectOptions = ref([])
const onSearch = debounce(onSearchDebounced, 300, { maxWait: 1000 })
const selectedOption = ref(getOpcaoSelecionada())

selectOptions.value = props.options ?? []

onMounted(() => {
    if (props.preBusca && selectOptions.value.length === 0) {
        atualizarOpcoes('', () => {
            // não tem loading em pré busca
        })
    }
})

watch(() => props.disabled, (newValue) => {
    if (!newValue) {
        atualizarOpcoes('', () => {
            // não tem loading em pré busca
        })
    }
})

async function onSearchDebounced(search, loading) {
    let termo = search.trim()
    await atualizarOpcoes(termo, loading)

    if (!props.criarDinamica) {
        return
    }

    if (termo.length === 0) {
        return
    }

    let opcoesEncontradas = selectOptions.value.filter((opcao) => opcao.texto.localeCompare(search) === 0).length
    if (opcoesEncontradas === 0) {
        selectOptions.value.push({ id: null, texto: search })
    }
}

async function atualizarOpcoes(search, loading) {
    if (!props.href) {
        selectOptions.value = []
        return
    }

    loading(true)

    let response = await axios.get(props.href, {
        params: {
            termo: search,
        },
    })
    selectOptions.value = response.data

    loading(false)
}

function updateModelValue() {
    emit('update:modelValue', selectedOption.value?.id)
    emit('optionSelected', selectedOption.value)

    if (selectedOption.value?.id === null && props.criarDinamica) {
        let option = selectOptions.value.find((opcao) => opcao.id === null)

        if (!option) {
            return
        }

        emit('criarNovaOpcao', option.texto)
    }
}

function getOpcaoSelecionada() {
    if (props.modelValue) {
        return selectOptions.value.find((opcao) => opcao.id === props.modelValue)
    }
    return null
}

</script>

<template>
    <VueSelect
        v-model="selectedOption"
        :disabled="disabled"
        :placeholder="placeholder ?? 'Selecione uma Opção'"
        :options="selectOptions"
        label="texto"
        searchable
        :filterable="false"
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
