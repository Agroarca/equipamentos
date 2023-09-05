<script setup lang="ts">
/* eslint-disable vuejs-accessibility/no-autofocus */
import { computed, ref } from 'vue'
/* eslint-disable vuejs-accessibility/form-control-has-label */
let props = defineProps({
    modelValue: null,
    inputName: String,
    inputId: String,
    autofocus: Boolean,
    required: Boolean,
})

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const mostrarSenha = ref(false)
const elInputSenha = ref(null)

const value = computed({
    get() {
        return props.modelValue
    },
    set(val: string) {
        emit('update:modelValue', val)
    },
})

function focus() {
    elInputSenha.value.focus()
}

defineExpose({
    focus,
})

</script>

<template>
    <div class="input-group">
        <input :id="inputId"
               ref="elInputSenha"
               v-model="value"
               :name="inputName"
               class="form-control"
               :type="mostrarSenha ? 'text' : 'password'"
               autocomplete="current-password"
               :autofocus="autofocus"
               :required="required">
        <div class="mostrar-senha input-group-text d-block cursor-pointer" @click.prevent="mostrarSenha = !mostrarSenha">
            <input id="mostrar_senha" v-model="mostrarSenha" class="form-check-input d-none" type="checkbox" />
            <label class="form-check-label cursor-pointer user-select-none" for="mostrar_senha">
                <i class="far pe-1" :class="mostrarSenha ? 'fa-eye' : 'fa-eye-slash'" />
                {{
                    mostrarSenha ? 'Esconder senha' : 'Mostrar senha'
                }}
            </label>
        </div>
    </div>
</template>
