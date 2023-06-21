<script setup lang="ts">
import { ref } from 'vue'
import { differenceInSeconds } from 'date-fns'
import Modal from '@/Componentes/Layout/Bootstrap/Modal.vue'

const props = defineProps({
    mensagem: Object,
    usuarioId: Number,
    mensagensTempoExcluir: Number,
})
const modal = ref(null)
const emit = defineEmits<{(e: 'excluirMensagem', value: Object): void}>()
const menuAberto = ref(false)
let podeExcluir = ref(getPodeExcluir())
verificarpodeExcluir()

function mostrarMenu(e) {
    if (!podeExcluir.value) {
        return
    }
    menuAberto.value = !menuAberto.value
    e.stopPropagation()
    window.addEventListener('click', fecharMenu)
}

function fecharMenu(e) {
    if (!document.querySelector('.mensagem .menu-container')?.contains(e.target)) {
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

function getPodeExcluir() {
    if (props.mensagem.usuario_id !== props.usuarioId) {
        return false
    }

    if (props.mensagem.loading) {
        return false
    }

    return differenceInSeconds(new Date(), Date.parse(props.mensagem.created_at)) <= props.mensagensTempoExcluir
}

function verificarpodeExcluir() {
    podeExcluir.value = getPodeExcluir()
    if (podeExcluir.value) {
        setTimeout(() => {
            verificarpodeExcluir()
        }, 1000)
    }
}

</script>

<template>
    <span :id="'msg-' + mensagem.id" class="mensagem" :class="{ autor: mensagem.usuario_id == usuarioId }" @click="mostrarMenu">
        {{ mensagem.mensagem }}
        <div v-if="mensagem.loading" class="spinner-border spinner-border-sm text-secondary" role="status" />
        <i v-if="podeExcluir" class="fa-solid fa-caret-down opcoes" />
        <Transition name="fade-500" :duration="500">
            <div v-if="menuAberto" class="menu-container">
                <div class="list-group">
                    <button type="button" class="list-group-item" @click="abrirModal">Excluir mensagem</button>
                    <button type="button" class="list-group-item list-group-item-danger">Fechar</button>
                </div>
            </div>
        </Transition>
        <Modal :id="'modal_' + mensagem.id" ref="modal" title="Excluir mensagem">

            <p>Deseja realmente excluir esta mensagem?</p>
            <p class="alert alert-warning">{{ mensagem.mensagem }}</p>
            <template #footer>
                <button type="button" class="btn btn-danger" @click="excluirMensagem">Excluir</button>
            </template>

        </Modal>
    </span>
</template>
