<script setup>
import { computed } from "@vue/runtime-core"

const props = defineProps(['modelValue', 'caracteristica'])
const emit = defineEmits('update:modelValue')
const name = 'caracteristica-' + props.caracteristica.id

const value = computed({
    get(){
        return props.modelValue
    },set(value){
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <div>
        <div v-if="caracteristica.tipo == 0" class="form-check form-switch">
            <input class="form-check-input" type="checkbox" v-model="value" :id="name" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 1">
            <input class="form-control" type="number" v-model="value" :id="name" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 2">
            <input class="form-control" type="number" v-model="value" :id="name" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 3">
            <input class="form-control" type="text" v-model="value" :id="name" :name="name">
        </div>
        <div v-if="caracteristica.tipo == 4">
            <textarea class="form-control" v-model="value" :id="name" :name="name" rows="3"></textarea>
        </div>
        <div v-if="caracteristica.tipo == 5">
            <select v-model="value" :id="name" :name="name" class="form-select">
                <option v-for="opcao in caracteristica.opcoes" :key="opcao.id" :value="opcao.id">{{ opcao.nome }}</option>
            </select>
        </div>
    </div>
</template>
