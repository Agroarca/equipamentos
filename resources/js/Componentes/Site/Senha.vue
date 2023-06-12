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
