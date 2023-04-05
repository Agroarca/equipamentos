<script setup lang="ts">
/* eslint-disable vuejs-accessibility/form-control-has-label */
import { ref, onMounted, nextTick, reactive } from 'vue'
import { debounce, first, filter, last } from 'lodash'
import axios from 'axios'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Mensagem from './Componentes/Mensagem.vue'
import { getPush } from '@/Componentes/Notificacao/Push'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import EventoConversa from '@/Componentes/Eventos/EventoConversa'
import Listener from '@/Componentes/Eventos/Listener'

const props = defineProps({
    conversa: Object,
    usuarioId: Number,
    mensagensTempoExcluir: Number,
})

const scroll = debounce(onScroll, 100, { maxWait: 250 })
const scrollMargin: number = 25
const maxlengthText: number = 2500
const elMensagens = ref(null)
let erroMensagem = ref('')

let tempId: number = -1
let controleAtualizar = {
    bloquearAtualizar: false,
    atualizar: false,
    bloquearAtualizarAnteriores: false,
}

const chat = reactive({
    mensagens: props.conversa.mensagens,
    mensagensAnteriores: ref(false),
    novasMensagens: ref(false),
    temPermNotificacao: ref(getPush().temPermissao()),
    conversaId: props.conversa.id,
    ultimaMsgVisualizadaId: props.conversa.visualizacao.ultima_mensagem_id,
    usuarioId: props.usuarioId,
    textoMsg: '',
})

onMounted(() => {
    if (elMensagens.value.scrollHeight > (elMensagens.value.clientHeight + scrollMargin)) {
        chat.mensagensAnteriores = true
    }

    nextTick(setScrollPagina)
    eventoConversaListener()
})

async function enviarMensagem() {
    try {
        let mensagem = {
            id: tempId,
            mensagem: chat.textoMsg,
            usuario_id: chat.usuarioId,
            created_at: new Date(),
            loading: true,
        }

        tempId -= 1
        chat.textoMsg = ''

        chat.mensagens.push(mensagem)
        await ajaxEnviarMensagem(mensagem.mensagem)
        chat.mensagens = filter(chat.mensagens, (m) => m.id !== mensagem.id)
        deveSolicitarPermissao()
    } catch (e) {
        if (e?.response?.data?.errors?.mensagem) {
            if (Array.isArray(e?.response?.data?.errors?.mensagem)) {
                [erroMensagem.value] = e.response.data.errors.mensagem
                return
            }
            erroMensagem.value = e.response.data.errors.mensagem
            return
        }
        if (e?.response?.data?.message) {
            erroMensagem.value = e.response.data.message
            return
        }
        erroMensagem.value = 'Erro ao enviar mensagem'

        setTimeout(() => {
            location.reload()
        }, 5000)
    }
}

function setScrollPagina() {
    const ultimaVisualizada = getUltimaMensagemVisualizada()

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
    const proximaMensagem = getProximaMensagem(chat.ultimaMsgVisualizadaId)
    if (proximaMensagem) {
        setMensagensScrolltop(getOffsetMensagem(proximaMensagem.id) - (elMensagens.value.clientHeight / 2))
        visualizarMensagem(proximaMensagem.id)
    } else {
        setScrollPagina()
    }
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

function onScroll() {
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
    if (ultimaVisualizada && ultimaVisualizada.id > chat.ultimaMsgVisualizadaId) {
        chat.ultimaMsgVisualizadaId = ultimaVisualizada.id
        visualizarMensagem(chat.ultimaMsgVisualizadaId)
    }
}

function procuraUltimaMensagemVisualizada() {
    const idxUltima = chat.mensagens.findIndex((m) => m.id > chat.ultimaMsgVisualizadaId)
    return chat.mensagens.slice(idxUltima).findLast((m) => verificaMensagemVisualizada(m.id))
}

function verificaMensagemVisualizada(id) {
    const el = elMensagens.value.querySelector(`#msg-${id}`)

    const elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop
    return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight
}

function excluirMensagemListener(mensagem) {
    ajaxExcluirMensagem(mensagem.id)
}

function getUltimaMensagemVisualizada() {
    return chat.mensagens.findLast((m) => m.id <= chat.ultimaMsgVisualizadaId)
}

function getProximaMensagem(id) {
    return chat.mensagens.find((m) => m.id > id)
}

function visualizarMensagem(id: number) {
    if (id < chat.ultimaMsgVisualizadaId) {
        return
    }

    chat.ultimaMsgVisualizadaId = id
    ajaxEnviarUltimaVisualizacao(id)
}

async function atualizarMensagens() {
    if (controleAtualizar.bloquearAtualizar) {
        controleAtualizar.atualizar = true
    }

    controleAtualizar.bloquearAtualizar = true
    controleAtualizar.atualizar = false

    await ajaxNovasMensagens(last(chat.mensagens)?.id ?? 0)

    controleAtualizar.bloquearAtualizar = false
    if (controleAtualizar.atualizar) {
        atualizarMensagens()
    }
}

async function atualizarMensagensAnteriores() {
    if (!chat.mensagensAnteriores.value || chat.mensagens.length === 0) {
        return
    }

    if (controleAtualizar.bloquearAtualizarAnteriores) {
        return
    }

    controleAtualizar.bloquearAtualizarAnteriores = true
    const mensagemId = first(chat.mensagens).id
    await ajaxMensagensAnteriores(mensagemId)
    nextTick(() => {
        setMensagensScrolltop(getOffsetMensagem(mensagemId))
    })
    controleAtualizar.bloquearAtualizarAnteriores = false
}

function solicitarPermNotificacao() {
    getPush().solicitarPermissao().then(() => { chat.temPermNotificacao.value = getPush().temPermissao() })
}

function deveSolicitarPermissao() {
    if (getPush().jaSolicitouPermissao()) {
        return
    }

    if (getPush().temPermissao()) {
        return
    }

    solicitarPermNotificacao()
}

async function ajaxMensagensAnteriores(mensagemId: number) {
    let response = await axios.get(`/conversa/${chat.conversaId}/mensagens/anteriores/${mensagemId}`)

    chat.mensagens = response.data.mensagens.concat(chat.mensagens)
    chat.mensagensAnteriores.value = response.data.mais
}

async function ajaxNovasMensagens(mensagemId: number) {
    let response = await axios.get(`/conversa/${chat.conversaId}/mensagens/posteriores/${mensagemId}`)

    if (response.data.mensagens.length > 0) {
        chat.mensagens = chat.mensagens.concat(response.data.mensagens)
        chat.novasMensagens.value = true
    }
}

async function ajaxEnviarMensagem(texto: string) {
    let response = await axios.post(`/conversa/${chat.conversaId}/enviar`, {
        mensagem: texto,
    })

    chat.mensagens.push(response.data)
}

function ajaxEnviarUltimaVisualizacao(id:number) {
    axios.post(`/conversa/${chat.conversaId}/mensagens/visualizacao/${id}`)
}

function ajaxExcluirMensagem(id: number) {
    axios.get(`/conversa/${chat.conversaId}/mensagem/excluir/${id}`).then(() => {
        chat.mensagens = filter(chat.mensagens, (m) => id !== m.id)
    })
}

function eventoConversaListener() {
    EventoConversa.addListener(new Listener((e) => {
        if (e.mensagem_id > (last(chat.mensagens)?.id ?? 0)) {
            atualizarMensagens()
        }
    }, 1))
}

</script>

<template>
    <SiteLayout :titulo="`Conversa ${conversa.equipamento.titulo}`">
        <div class="container conversa">
            <h2>Conversa - {{ conversa.equipamento.titulo }}</h2>
            <div v-if="!chat.temPermNotificacao" class="alert alert-warning mt-2 mb-4 cursor-pointer" @click="solicitarPermNotificacao">
                Você não irá receber notificações de novas mensagens.<br>
                Clique aqui para autorizar as Notificações
            </div>
            <div class="conteudo">
                <div class="container-mensagens">
                    <div ref="elMensagens" class="mensagens" @scroll="scroll">
                        <div v-if="chat.mensagensAnteriores" class="loader-inline">
                            <span class="elemento" />
                        </div>
                        <Mensagem v-for="mensagem in chat.mensagens" :key="mensagem.id"
                                  :mensagem="mensagem"
                                  :usuarioId="usuarioId"
                                  :mensagensTempoExcluir="mensagensTempoExcluir"
                                  @excluirMensagem="excluirMensagemListener" />
                    </div>
                    <Transition name="fade-transition" :duration="100">
                        <button v-if="chat.novasMensagens" type="button" class="novas-mensagens" @click="novasMensagens">
                            <span>Novas Mensagens</span>
                        </button>
                    </Transition>
                </div>
                <form class="mensagens-footer" @submit.prevent="enviarMensagem">
                    <div class="col">
                        <div class="row">
                            <FormError :error="erroMensagem" />
                        </div>
                        <div class="d-flex flex-row">
                            <textarea v-model="chat.textoMsg" class="form-control" :maxlength="maxlengthText" rows="3" />
                            <div class="col">
                                <button type="submit" class="btn btn-primary">
                                    Enviar
                                </button>
                                <span class="textcount">{{ chat.textoMsg.length + ' / ' + maxlengthText }}</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </SiteLayout>
</template>
