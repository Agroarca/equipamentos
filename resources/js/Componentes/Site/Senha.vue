<script setup lang="ts">
import { computed, ref } from 'vue'
/* eslint-disable vuejs-accessibility/form-control-has-label */
let props = defineProps({
    modelValue: null,
    inputName: String,
    inputId: String,
})

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

let mostrarSenha = ref(false)

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
    <div class="input-group">
        <input :id="inputId" v-model="value" :name="inputName" class="form-control" :type="mostrarSenha ? 'text' : 'password'" required autocomplete="current-password">
        <span id="basic-addon2" class="input-group-text" @click="mostrarSenha = !mostrarSenha">
            <input id=" mostrar_senha" v-model="mostrarSenha" class="form-check-input" type="checkbox">
            <label class="form-check-label ps-2" for="mostrar_senha">Mostrar senha</label>
        </span>
    </div>
</template>
