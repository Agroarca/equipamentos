<script setup lang="ts">
import { nextTick, ref } from 'vue'

const props = defineProps({
    mensagem: Object,
    usuarioId: Number,
})
const emit = defineEmits<{(e: 'excluirMensagem', value: Object): void}>()
const menuAberto = ref(false)
function mostrarMenu() {
    menuAberto.value = !menuAberto.value
    console.log(menuAberto.value)
    setTimeout(() => {
        window.addEventListener('click', fecharMenu)
    }, 500)
}
function fecharMenu(e) {
    if (!document.querySelector('.mensagem .menu-container').contains(e.target)) {
        menuAberto.value = false
        window.removeEventListener('click', fecharMenu)
        console.log('fechar')
    }
}
function excluirMensagem() {
    emit('excluirMensagem', props.mensagem)
}
</script>

<template>
    <span :id="'msg-' + mensagem.id" class="mensagem" :class="{ autor: mensagem.usuario_id == usuarioId }">
        {{ mensagem.mensagem }}
        <i class="fa-solid fa-caret-down opcoes" @click="mostrarMenu" />
        <Transition name="fade-500" :duration="500">
            <div v-if="menuAberto" class="menu-container">
                <ul class="list-group">
                    <li class="list-group-item" @click="excluirMensagem">Excluir mensagem</li>
                </ul>
            </div>
        </Transition>
    </span>
</template>
