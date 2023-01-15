import { nextTick } from "vue";
import EventoConversa from '@/Components/Eventos/EventoConversa.js'
import axios from 'axios';
import { debounce } from 'lodash';

export default class ConversaScript {
    scrollMargin = 25
    ultimaVisualizadaId
    conversa

    elMensagens
    mensagens
    mensagem
    antes
    novasMensagens

    scroll = debounce(this.onScroll, 100, { maxWait: 250 })
    enviarVisualizacao = debounce(this.enviarUltimaVisualizacao, 500, { maxWait: 10000 })

    constructor(conversa) {
        this.mensagens = conversa.mensagens
        this.conversa = conversa
        this.ultimaVisualizadaId = conversa.visualizacao.ultima_mensagem_id
        this.mensagem = ''
        this.antes = true
        this.novasMensagens = false

        EventoConversa.addListener(this.eventoConversa)
    }

    enviarMensagem() {
        return axios.post(route('site.conversa.enviar', this.conversa.id), {
            mensagem: this.mensagem
        }).then(() => {
            this.mensagem = ''
        }).catch((e) => {
            location.reload()
        })
    }

    getUltimaVisualizada() {
        return this.mensagens.findLast(m => m.id <= this.ultimaVisualizadaId)
    }

    setScrollVisualizada() {
        let ultimaVisualizada = this.getUltimaVisualizada()

        if (ultimaVisualizada) {
            this.setMensagensScrolltop(this.getOffsetMensagem(ultimaVisualizada.id) - (this.elMensagens.clientHeight / 2))
        } else {
            this.setMensagensScrolltop(this.elMensagens.querySelector('.loader-inline').clientHeight)
        }
    }

    setMensagensScrolltop(px) {
        this.elMensagens.scrollTop = px

        setTimeout(() => {
            this.scroll.cancel()
        }, 100)
    }

    getOffsetMensagem(id) {
        return this.elMensagens.querySelector('#msg-' + id).offsetTop - this.elMensagens.offsetTop;
    }

    onScroll(event) {

        if (this.elMensagens.scrollTop <= this.scrollMargin) {
            this.atualizarMensagensAnteriores()
        }

        let ultimaVisualizada = this.procuraUltimaMensagemVisualizada();
        if (ultimaVisualizada && ultimaVisualizada.id > this.ultimaVisualizadaId) {
            this.ultimaVisualizadaId = ultimaVisualizada.id
            this.enviarUltimaVisualizacao()
        }
    }

    procuraUltimaMensagemVisualizada() {
        let idxUltima = this.mensagens.findIndex(m => m.id > this.ultimaVisualizadaId)
        return this.mensagens.slice(idxUltima).findLast(m => this.verificaMensagemVisualizada(m.id))
    }

    verificaMensagemVisualizada(id) {
        let el = this.elMensagens.querySelector('#msg-' + id)

        let elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop
        return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight
    }

    enviarUltimaVisualizacao() {
        axios.post(route('site.conversa.mensagens.visualizacao', [this.conversa.id, this.ultimaVisualizadaId]))
    }

    atualizarMensagens() {
        let ultimaMensagem = this.mensagens.findLast(() => true)

        if (!ultimaMensagem) return;

        axios.get(route('site.conversa.mensagens', [this.conversa.id, ultimaMensagem.id]))
            .then((response) => {

                if (response.data.mensagens.length > 0) {
                    this.mensagens = mensagens.concat(response.data.mensagens);
                    this.novasMensagens = true
                }
            })
    }

    eventoConversa(e) {
        if (e.mensagem_id > 10) {
            this.atualizarMensagens();
            e.cancelled = true
        }
    }

    atualizarMensagensAnteriores() {
        if (!this.antes && this.mensagens > 0) {
            return;
        }

        let mensagemId = this.mensagens[0].id
        axios.get(route('site.conversa.mensagens.anteriores', [this.conversa.id, mensagemId]))
            .then((response) => {
                this.mensagens = response.data.mensagens.concat(this.mensagens);
                this.antes = response.data.mais
                nextTick(() => {
                    this.setMensagensScrolltop(this.getOffsetMensagem(mensagemId));
                })
            })
    }
}
