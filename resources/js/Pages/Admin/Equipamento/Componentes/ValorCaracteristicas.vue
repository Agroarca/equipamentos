<script setup lang="ts">
/* eslint-disable vue/require-prop-types */
/* eslint-disable vuejs-accessibility/form-control-has-label */
import { computed } from '@vue/runtime-core'

const props = defineProps(['modelValue', 'caracteristica'])
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()
const name = `caracteristica-${props.caracteristica.id}`

const value = computed({
    get() {
        return props.modelValue
    },
    set(val: string) {
        emit('update:modelValue', val)
    },
})
</script>

<template>
    <div>
        <div v-if="caracteristica.tipo == 0" class="form-check form-switch">
            <input :id="name" v-model="value" :checked="value" class="form-check-input" type="checkbox" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 1">
            <input :id="name" v-model="value" class="form-control" type="number" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 2">
            <input :id="name" v-model="value" class="form-control" type="number" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 3">
            <input :id="name" v-model="value" class="form-control" type="text" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 4">
            <textarea :id="name" v-model="value" class="form-control" :name="name" rows="3" />
        </div>
        <div v-if="caracteristica.tipo == 5">
            <select :id="name" v-model="value" :name="name" class="form-select">
                <option v-for="opcao in caracteristica.opcoes" :key="opcao.id" :value="opcao.id">
                    {{ opcao.nome }}
                </option>
            </select>
        </div>
    </div>
</template>
