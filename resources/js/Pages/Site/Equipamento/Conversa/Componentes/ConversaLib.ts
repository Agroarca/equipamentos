import { Ref, onMounted, ref } from 'vue'
import { filter, first, last } from 'lodash'
import axios from 'axios'
import { getPush } from '@/Componentes/Notificacao/Push'
import NovaMensagem from '@/Componentes/Eventos/NovaMensagem'
import MensagemExcluida from '@/Componentes/Eventos/MensagemExcluida'
import Listener from '@/Componentes/Eventos/Listener'
import Conversa from '@/Models/Equipamento/Conversa/Conversa'
import Mensagem from '@/Models/Equipamento/Conversa/Mensagem'

export default function conversaLib(conversa: Conversa, propsUsuarioId) {
    let mensagens: Ref<Mensagem[]> = ref(conversa.mensagens)
    let mensagensAnteriores: Ref<boolean> = ref(false)
    let temNovasMensagens: Ref<boolean> = ref(false)
    let temPermNotificacao: Ref<boolean> = ref(getPush().temPermissao())
    let conversaId: number = conversa.id
    let ultimaMsgVisualizadaId: Ref<number> = ref(conversa.visualizacao.ultima_mensagem_id)
    let usuarioId: number = propsUsuarioId

    let tempId: number = -1
    let controleAtualizar = {
        bloquearAtualizar: false,
        atualizar: false,
        bloquearAtualizarAnteriores: false,
    }

    onMounted(() => {
        novaMensagemListener()
        mensagemExcluidaListener()
    })

    function getUltimaMensagemVisualizada() {
        return mensagens.value.findLast((m) => m.id <= ultimaMsgVisualizadaId.value)
    }

    function getProximaMensagem(id) {
        return mensagens.value.find((m) => m.id > id)
    }

    function visualizarMensagem(id: number) {
        if (id < ultimaMsgVisualizadaId.value) {
            return
        }

        ultimaMsgVisualizadaId.value = id
        ajaxEnviarUltimaVisualizacao(id)
    }

    async function atualizarMensagens() {
        if (controleAtualizar.bloquearAtualizar) {
            controleAtualizar.atualizar = true
        }

        controleAtualizar.bloquearAtualizar = true
        controleAtualizar.atualizar = false

        await ajaxNovasMensagens(last(mensagens.value)?.id ?? 0)

        controleAtualizar.bloquearAtualizar = false
        if (controleAtualizar.atualizar) {
            atualizarMensagens()
        }
    }

    function solicitarPermNotificacao() {
        getPush().solicitarPermissao().then(() => { temPermNotificacao.value = getPush().temPermissao() })
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

    async function atualizarMensagensAnteriores() {
        if (!mensagensAnteriores.value || mensagens.value.length === 0) {
            return null
        }

        if (controleAtualizar.bloquearAtualizarAnteriores) {
            return null
        }

        controleAtualizar.bloquearAtualizarAnteriores = true
        const mensagemId = first(mensagens.value).id
        await ajaxMensagensAnteriores(mensagemId)
        return mensagemId

        controleAtualizar.bloquearAtualizarAnteriores = false
    }

    async function ajaxMensagensAnteriores(mensagemId: number) {
        let response = await axios.get(`/conversa/${conversaId}/mensagens/anteriores/${mensagemId}`)

        mensagens.value = Mensagem.converterArray(response.data.mensagens).concat(mensagens.value)
        mensagensAnteriores.value = response.data.mais
    }

    async function ajaxNovasMensagens(mensagemId: number) {
        let response = await axios.get(`/conversa/${conversaId}/mensagens/posteriores/${mensagemId}`)

        if (response.data.mensagens.length > 0) {
            mensagens.value = mensagens.value.concat(Mensagem.converterArray(response.data.mensagens))
            temNovasMensagens.value = true
        }
    }

    async function ajaxEnviarMensagem(texto: string) {
        let response = await axios.post(`/conversa/${conversaId}/enviar`, {
            mensagem: texto,
        })

        mensagens.value.push(new Mensagem(response.data.id, response.data.mensagem, response.data.usuario_id, response.data.created_at))
    }

    function ajaxEnviarUltimaVisualizacao(id:number) {
        axios.post(`/conversa/${conversaId}/mensagens/visualizacao/${id}`)
    }

    function ajaxExcluirMensagem(id: number) {
        axios.get(`/conversa/${conversaId}/mensagem/excluir/${id}`).then(() => {
            mensagens.value = filter(mensagens.value, (m) => id !== m.id)
        })
    }

    function novaMensagemListener() {
        NovaMensagem.addListener(new Listener((e) => {
            if (e.mensagem_id > (last(mensagens.value)?.id ?? 0)) {
                atualizarMensagens()
            }
        }, 1))
    }

    function mensagemExcluidaListener() {
        MensagemExcluida.addListener(new Listener((e) => {
            mensagens.value = filter(mensagens.value, (m) => e.mensagem_id !== m.id)
        }, 1))
    }

    async function enviarMensagem(texto:string) {
        let mensagem = new Mensagem(tempId, texto, usuarioId, new Date(), true)
        tempId -= 1

        mensagens.value.push(mensagem)
        await ajaxEnviarMensagem(mensagem.mensagem)
        mensagens.value = filter(mensagens.value, (m) => m.id !== mensagem.id)
        deveSolicitarPermissao()
    }

    function getMensagemErroEnviarMensagem(e) {
        if (e?.response?.data?.errors?.mensagem) {
            if (Array.isArray(e?.response?.data?.errors?.mensagem)) {
                let [mensagem] = e.response.data.errors.mensagem
                return mensagem
            }
            return e.response.data.errors.mensagem
        }
        if (e?.response?.data?.message) {
            return e.response.data.message
        }
        return 'Erro ao enviar mensagem'
    }

    return {
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
    }
}
