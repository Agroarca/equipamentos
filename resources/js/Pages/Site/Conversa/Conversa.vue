<script setup lang="ts">
/* eslint-disable vue/no-setup-props-destructure */
/* eslint-disable vuejs-accessibility/form-control-has-label */
/* eslint-disable no-restricted-globals */
import { ref, onMounted, reactive, nextTick } from 'vue'
import axios from 'axios'
import { debounce, last } from 'lodash'
import EventoConversa from '@/Components/Eventos/EventoConversa'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Listener from '@/Components/Eventos/Listener'

const props = defineProps({
    conversa: Object,
    usuarioId: Number,
})
const scroll = debounce(onScroll, 100, { maxWait: 250 })
const enviarVisualizacao = debounce(enviarUltimaVisualizacao, 500, { maxWait: 10000 })

const scrollMargin: number = 25
const maxlengthText: number = 2500
let ultimaVisualizadaId: number = props.conversa.visualizacao.ultima_mensagem_id
const elMensagens = ref(null)

const chat = reactive({
    mensagens: props.conversa.mensagens,
    mensagem: '',
    mensagensAnteriores: false,
    novasMensagens: false,
})

EventoConversa.addListener(new Listener(eventoConversa, 1))
onMounted(() => {
    if (elMensagens.value.scrollHeight > (elMensagens.value.clientHeight + scrollMargin)) {
        chat.mensagensAnteriores = true
    }

    nextTick(setScrollPagina)
})

function enviarMensagem() {
    return axios.post(`/conversa/${props.conversa.id}/enviar`, {
        mensagem: chat.mensagem,
    }).then(() => {
        chat.mensagem = ''
    }).catch((e) => {
        location.reload()
    })
}

function getUltimaVisualizada() {
    return chat.mensagens.findLast((m) => m.id <= ultimaVisualizadaId)
}

function setScrollPagina() {
    const ultimaVisualizada = getUltimaVisualizada()

    if (ultimaVisualizada) {
        setMensagensScrolltop(getOffsetMensagem(ultimaVisualizada.id) - (elMensagens.value.clientHeight / 2))
    }

    if (elMensagens.value.scrollTop < elMensagens.value.querySelector('.loader-inline')?.clientHeight) {
        setMensagensScrolltop(elMensagens.value.querySelector('.loader-inline')?.clientHeight)
    }

    nextTick(verificaUltimaVisualizada)
}

function novasMensagens() {
    chat.novasMensagens = false
    const proximaMensagem = getProximaMensagem()
    if (proximaMensagem) {
        setMensagensScrolltop(getOffsetMensagem(proximaMensagem.id) - (elMensagens.value.clientHeight / 2))
        ultimaVisualizadaId = proximaMensagem.id
        enviarUltimaVisualizacao()
    } else {
        setScrollPagina()
    }
}

function getProximaMensagem() {
    return chat.mensagens.find((m) => m.id > ultimaVisualizadaId)
}

function setMensagensScrolltop(px) {
    elMensagens.value.scrollTop = px

    setTimeout(() => {
        scroll.cancel()
    }, 100)
}

function getOffsetMensagem(id) {
    return elMensagens.value.querySelector(`#msg-${id}`).offsetTop - elMensagens.value.offsetTop
}

function onScroll(event) {
    if (elMensagens.value.scrollTop <= scrollMargin) {
        atualizarMensagensAnteriores()
    }

    verificaUltimaVisualizada()

    if ((elMensagens.value.scrollTop + elMensagens.value.clientHeight) >= (elMensagens.value.scrollHeight - scrollMargin)) {
        chat.novasMensagens = false
    }
}

function verificaUltimaVisualizada() {
    const ultimaVisualizada = procuraUltimaMensagemVisualizada()
    if (ultimaVisualizada && ultimaVisualizada.id > ultimaVisualizadaId) {
        ultimaVisualizadaId = ultimaVisualizada.id
        enviarUltimaVisualizacao()
    }
}

function procuraUltimaMensagemVisualizada() {
    const idxUltima = chat.mensagens.findIndex((m) => m.id > ultimaVisualizadaId)
    return chat.mensagens.slice(idxUltima).findLast((m) => verificaMensagemVisualizada(m.id))
}

function verificaMensagemVisualizada(id) {
    const el = elMensagens.value.querySelector(`#msg-${id}`)

    const elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop
    return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight
}

function enviarUltimaVisualizacao() {
    axios.post(`conversa/${props.conversa.id}/mensagens/visualizacao/${ultimaVisualizadaId}`)
}

function atualizarMensagens() {
    function requestAtualizarMensagens() {
        let mensagemId = last(chat.mensagens)?.id ?? 0
        return axios.get(`/conversa/${props.conversa.id}/mensagens/posteriores/${mensagemId}`)
            .then((response) => {
                if (response.data.mensagens.length > 0) {
                    chat.mensagens = chat.mensagens.concat(response.data.mensagens)
                    chat.novasMensagens = true
                }
            })
    }

    if (atualizarMensagens.bloquear) {
        atualizarMensagens.atualizar = true
        return
    }

    atualizarMensagens.bloquear = true
    atualizarMensagens.atualizar = false

    requestAtualizarMensagens().finally(() => {
        atualizarMensagens.bloquear = false

        if (atualizarMensagens.atualizar) {
            atualizarMensagens()
        }
    })
}

function eventoConversa(e:EventoConversa) {
    if (e.mensagem_id > (last(chat.mensagens)?.id ?? 0)) {
        atualizarMensagens()
    }
}

function atualizarMensagensAnteriores() {
    if (!chat.mensagensAnteriores || chat.mensagens > 0) {
        return
    }

    const mensagemId = chat.mensagens[0].id
    axios.get(`conversa/${props.conversa.id}/mensagens/anteriores/${mensagemId}`)
        .then((response) => {
            chat.mensagens = response.data.mensagens.concat(chat.mensagens)
            chat.mensagensAnteriores = response.data.mais
            nextTick(() => {
                setMensagensScrolltop(getOffsetMensagem(mensagemId))
            })
        })
}

</script>

<template>
    <SiteLayout>
        <div class="container conversa">
            <h2>Conversa - {{ conversa.equipamento.titulo }}</h2>
            <div class="conteudo">
                <div class="container-mensagens">
                    <div ref="elMensagens" class="mensagens" @scroll="scroll">
                        <div v-if="chat.mensagensAnteriores" class="loader-inline">
                            <span class="elemento" />
                        </div>
                        <span v-for="mensagem in chat.mensagens" :id="'msg-' + mensagem.id" :key="mensagem.id" class="mensagem" :class="{ autor: mensagem.usuario_id == usuarioId }">
                            {{ mensagem.mensagem }}
                        </span>
                    </div>
                    <Transition name="fade-transition" :duration="100">
                        <button v-if="chat.novasMensagens" type="button" class="novas-mensagens" @click="novasMensagens">
                            <span>Novas Mensagens</span>
                        </button>
                    </Transition>
                </div>
                <form class="mensagens-footer" @submit.prevent="enviarMensagem">
                    <textarea v-model="chat.mensagem" class="form-control" :maxlength="maxlengthText" rows="3" />
                    <div class="col">
                        <button type="submit" class="btn btn-primary">
                            Enviar
                        </button>
                        <span class="textcount">{{ chat.mensagem.length + ' / ' + maxlengthText }}</span>
                    </div>
                </form>
            </div>
        </div>
    </SiteLayout>
</template>
