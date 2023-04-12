<script setup lang="ts">
/* eslint-disable vuejs-accessibility/form-control-has-label */
import { ref, onMounted, nextTick } from 'vue'
import { debounce } from 'lodash'
import SiteLayout from '@/Layouts/SiteLayout.vue'
import Mensagem from './Componentes/Mensagem.vue'
import FormError from '@/Componentes/Layout/Forms/FormError.vue'
import conversaLib from './Componentes/ConversaLib'
import Conversa from '@/Models/Equipamento/Conversa/Conversa'

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
let textoMsg = ref('')
let conversaModel = new Conversa(props.conversa.id, props.conversa.equipamentoId, props.conversa.visualizacao, props.conversa.mensagens)

const {
    mensagens,
    mensagensAnteriores,
    temNovasMensagens,
    temPermNotificacao,
    ultimaMsgVisualizadaId,
    ajaxExcluirMensagem,
    atualizarMensagensAnteriores,
    enviarMensagem,
    getMensagemErroEnviarMensagem,
    getProximaMensagem,
    getUltimaMensagemVisualizada,
    solicitarPermNotificacao,
    visualizarMensagem,
} = conversaLib(conversaModel, props.usuarioId)

onMounted(() => {
    if (elMensagens.value.scrollHeight > (elMensagens.value.clientHeight + scrollMargin)) {
        mensagensAnteriores.value = true
    }

    nextTick(setScrollPagina)
})

async function enviarMensagemEvent() {
    try {
        let texto = textoMsg.value.trim()
        textoMsg.value = ''
        erroMensagem.value = ''
        await enviarMensagem(texto)
    } catch (e) {
        erroMensagem.value = getMensagemErroEnviarMensagem(e)

        if (e?.response?.data?.mensagem?.length === 0) {
            setTimeout(() => {
                window.location.reload()
            }, 5000)
        }
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
    temNovasMensagens.value = false
    const proximaMensagem = getProximaMensagem(ultimaMsgVisualizadaId)
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
        atualizarMsgsAnteriores()
    }

    verificaUltimaVisualizada()

    if ((elMensagens.value.scrollTop + elMensagens.value.clientHeight) >= (elMensagens.value.scrollHeight - scrollMargin)) {
        temNovasMensagens.value = false
    }
}

function verificaUltimaVisualizada() {
    const ultimaVisualizada = procuraUltimaMensagemVisualizada()
    if (ultimaVisualizada && ultimaVisualizada.id > ultimaMsgVisualizadaId) {
        ultimaMsgVisualizadaId.value = ultimaVisualizada.id
        visualizarMensagem(ultimaMsgVisualizadaId.value)
    }
}

function procuraUltimaMensagemVisualizada() {
    const idxUltima = mensagens.value.findIndex((m) => m.id > ultimaMsgVisualizadaId.value)
    return mensagens.value.slice(idxUltima).findLast((m) => verificaMensagemVisualizada(m.id))
}

function verificaMensagemVisualizada(id) {
    const el = elMensagens.value.querySelector(`#msg-${id}`)

    const elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop
    return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight
}

function atualizarMsgsAnteriores() {
    let mensagemId = atualizarMensagensAnteriores()
    if (!mensagemId) { return }

    nextTick(() => {
        setMensagensScrolltop(getOffsetMensagem(mensagemId))
    })
}

function excluirMensagemListener(mensagem) {
    ajaxExcluirMensagem(mensagem.id)
}

</script>

<template>
    <SiteLayout :titulo="`Conversa ${conversa.equipamento.titulo}`">
        <div class="container conversa">
            <h2>Conversa - {{ conversa.equipamento.titulo }}</h2>
            <div v-if="!temPermNotificacao" class="alert alert-warning mt-2 mb-4 cursor-pointer" @click="solicitarPermNotificacao">
                Você não irá receber notificações de novas mensagens.<br>
                Clique aqui para autorizar as Notificações
            </div>
            <div class="conteudo">
                <div class="container-mensagens">
                    <div ref="elMensagens" class="mensagens" @scroll="scroll">
                        <div v-if="mensagensAnteriores" class="loader-inline">
                            <span class="elemento" />
                        </div>
                        <Mensagem v-for="mensagem in mensagens" :key="mensagem.id" :mensagem="mensagem"
                                  :usuarioId="usuarioId" :mensagensTempoExcluir="mensagensTempoExcluir"
                                  @excluirMensagem="excluirMensagemListener" />
                    </div>
                    <Transition name="fade-transition" :duration="100">
                        <button v-if="temNovasMensagens" type="button" class="novas-mensagens" @click="novasMensagens">
                            <span>Novas Mensagens</span>
                        </button>
                    </Transition>
                </div>
                <form class="mensagens-footer" @submit.prevent="enviarMensagemEvent">
                    <div class="col">
                        <div class="row">
                            <FormError :error="erroMensagem" />
                        </div>
                        <div class="d-flex flex-row">
                            <textarea v-model="textoMsg" class="form-control" :maxlength="maxlengthText" rows="3" />
                            <div class="col">
                                <button type="submit" class="btn btn-primary">
                                    Enviar
                                </button>
                                <span class="textcount">{{ textoMsg.length + ' / ' + maxlengthText }}</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </SiteLayout>
</template>
