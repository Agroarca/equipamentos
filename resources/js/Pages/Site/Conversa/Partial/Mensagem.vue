<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/Components/Admin/Modal.vue'

const props = defineProps({
    mensagem: Object,
    usuarioId: Number,
})
const modal = ref(null)
const emit = defineEmits<{(e: 'excluirMensagem', value: Object): void}>()
const menuAberto = ref(false)
let timerTouth = null
function mostrarMenu() {
    menuAberto.value = !menuAberto.value
    setTimeout(() => {
        window.addEventListener('click', fecharMenu)
    }, 500)
}
function fecharMenu(e) {
    if (!document.querySelector('.mensagem .menu-container').contains(e.target)) {
        menuAberto.value = false
        window.removeEventListener('click', fecharMenu)
    }
}
function excluirMensagem() {
    modal.value.hide()
    emit('excluirMensagem', props.mensagem)
}
function abrirModal() {
    modal.value.show()
}

function touchstart() {
    timerTouth = setTimeout(() => {
        timerTouth = null
        mostrarMenu()
    }, 2000)
}

function touchend() {
    clearTimeout(timerTouth)
}
function touchmove() {
    clearTimeout(timerTouth)
}
</script>

<template>
    <span :id="'msg-' + mensagem.id" class="mensagem" :class="{ autor: mensagem.usuario_id == usuarioId }" @click="mostrarMenu">
        {{ mensagem.mensagem }}
        <i class="fa-solid fa-caret-down opcoes" />
        <Transition name="fade-500" :duration="500">
            <div v-if="menuAberto" class="menu-container">
                <div class="list-group">
                    <button type="button" class="list-group-item" @click="abrirModal">Excluir mensagem</button>
                    <button type="button" class="list-group-item list-group-item-danger">Fechar</button>
                </div>
            </div>
        </Transition>
        <Modal :id="'modal_' + mensagem.id" ref="modal" title="Excluir Mensagem">

            <p>Deseja realmente excluir esta mensagem?</p>
            <p class="alert alert-warning">{{ mensagem.mensagem }}</p>
            <template #footer>
                <button type="button" class="btn btn-danger" @click="excluirMensagem">Excluir</button>
            </template>

        </Modal>
    </span>
</template>
