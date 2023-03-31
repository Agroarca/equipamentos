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
    (e: 'criarNovaOpcao', value: string): void
}>()

const options = ref([])
const onSearch = debounce(onSearchDebounced, 300, { maxWait: 1000 })
const selectedOption = ref(getOpcaoSelecionada())

options.value = props.options ?? []

onMounted(() => {
    if (props.preBusca && options.value.length === 0) {
        atualizarOpcoes('', () => {})
    }
})

watch(() => props.disabled, (newValue) => {
    if (!newValue) {
        atualizarOpcoes('', () => {})
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

    let opcoesEncontradas = options.value.filter((opcao) => opcao.texto.localeCompare(search) === 0).length
    if (opcoesEncontradas === 0) {
        options.value.push({ id: null, texto: `Criar nova opção "${search}"` })
    }
}

async function atualizarOpcoes(search, loading) {
    if (!props.href) {
        options.value = []
        return
    }

    loading(true)

    let response = await axios.get(props.href, {
        params: {
            termo: search,
        },
    })
    options.value = response.data

    loading(false)
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
        :disabled="disabled"
        :placeholder="placeholder ?? 'Selecione uma Opção'"
        :options="options"
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
