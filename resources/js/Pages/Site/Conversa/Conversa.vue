<script setup lang="ts">
    import SiteLayout from '@/Layouts/SiteLayout.vue';
    import EventoConversa from '@/Components/Eventos/EventoConversa'
    import { ref, onMounted, reactive} from 'vue';
    import { nextTick } from "vue";
    import axios from 'axios';
    import {debounce} from 'lodash';
    import Listener from '@/Components/Eventos/Listener';

    const props = defineProps(['conversa', 'usuario_id'])
    let scroll = debounce(onScroll, 100, { maxWait: 250 })
    let enviarVisualizacao = debounce(enviarUltimaVisualizacao, 500, { maxWait: 10000 })

    const scrollMargin:number = 25
    const maxlengthText:number = 2500
    let ultimaVisualizadaId:number = props.conversa.visualizacao.ultima_mensagem_id
    const elMensagens = ref(null);

    let chat = reactive({
        mensagens: props.conversa.mensagens,
        mensagem: '',
        mensagensAnteriores: false,
        novasMensagens: false
    })

    EventoConversa.addListener(new Listener(eventoConversa, 1))
    onMounted(() => {
        if(elMensagens.value.scrollHeight > (elMensagens.value.clientHeight + scrollMargin)){
            chat.mensagensAnteriores = true
        }

        nextTick(setScrollPagina)
    })

    function enviarMensagem() {
        return axios.post(route('site.conversa.enviar', props.conversa.id), {
            mensagem: chat.mensagem
        }).then(() => {
            chat.mensagem = ''
        }).catch((e) => {
            location.reload()
        })
    }

    function getUltimaVisualizada() {
        return chat.mensagens.findLast(m => m.id <= ultimaVisualizadaId)
    }

    function setScrollPagina() {
        let ultimaVisualizada = getUltimaVisualizada()

        if (ultimaVisualizada) {
            setMensagensScrolltop(getOffsetMensagem(ultimaVisualizada.id) - (elMensagens.value.clientHeight / 2))
        }

        if(elMensagens.value.scrollTop < elMensagens.value.querySelector('.loader-inline')?.clientHeight){
            setMensagensScrolltop(elMensagens.value.querySelector('.loader-inline')?.clientHeight)
        }

        nextTick(verificaUltimaVisualizada)
    }

    function novasMensagens(){
        chat.novasMensagens = false
        let proximaMensagem = getProximaMensagem()
        if(proximaMensagem){
            setMensagensScrolltop(getOffsetMensagem(proximaMensagem.id) - (elMensagens.value.clientHeight / 2))
            ultimaVisualizadaId = proximaMensagem.id
            enviarUltimaVisualizacao()
        }else{
            setScrollPagina()
        }
   }

    function getProximaMensagem(){
        return chat.mensagens.find(m => m.id > ultimaVisualizadaId)
    }

    function setMensagensScrolltop(px) {
        elMensagens.value.scrollTop = px

        setTimeout(() => {
            scroll.cancel()
        }, 100)
    }

    function getOffsetMensagem(id) {
        return elMensagens.value.querySelector('#msg-' + id).offsetTop - elMensagens.value.offsetTop;
    }

    function onScroll(event) {

        if (elMensagens.value.scrollTop <= scrollMargin) {
            atualizarMensagensAnteriores()
        }

        verificaUltimaVisualizada()

        if((elMensagens.value.scrollTop + elMensagens.value.clientHeight) >= (elMensagens.value.scrollHeight - scrollMargin)){
            chat.novasMensagens = false;
        }
    }

    function verificaUltimaVisualizada(){
        let ultimaVisualizada = procuraUltimaMensagemVisualizada();
        if (ultimaVisualizada && ultimaVisualizada.id > ultimaVisualizadaId) {
            ultimaVisualizadaId = ultimaVisualizada.id
            enviarUltimaVisualizacao()
        }
    }

    function procuraUltimaMensagemVisualizada() {
        let idxUltima = chat.mensagens.findIndex(m => m.id > ultimaVisualizadaId)
        return chat.mensagens.slice(idxUltima).findLast(m => verificaMensagemVisualizada(m.id))
    }

    function verificaMensagemVisualizada(id) {
        let el = elMensagens.value.querySelector('#msg-' + id)

        let elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop
        return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight
    }

    function enviarUltimaVisualizacao() {
        axios.post(route('site.conversa.mensagens.visualizacao', [props.conversa.id, ultimaVisualizadaId]))
    }

    function atualizarMensagens() {
        axios.get(route('site.conversa.mensagens', [props.conversa.id, (chat.mensagens.findLast(() => true)?.id ?? 0)]))
        .then((response) => {

            if (response.data.mensagens.length > 0) {
                chat.mensagens = chat.mensagens.concat(response.data.mensagens);
                chat.novasMensagens = true
            }
        })
    }

    function eventoConversa(e:EventoConversa) {
        if(e.mensagem_id > (chat.mensagens.findLast(() => true)?.id ?? 0)){
            atualizarMensagens();
            e.cancelled = true
        }
    }

    function atualizarMensagensAnteriores() {
        if (!chat.mensagensAnteriores || chat.mensagens > 0) {
            return;
        }

        let mensagemId = chat.mensagens[0].id
        axios.get(route('site.conversa.mensagens.anteriores', [props.conversa.id, mensagemId]))
        .then((response) => {
            chat.mensagens = response.data.mensagens.concat(chat.mensagens);
            chat.mensagensAnteriores = response.data.mais
            nextTick(() => {
                setMensagensScrolltop(getOffsetMensagem(mensagemId));
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
                    <div class="mensagens" @scroll="scroll" ref="elMensagens">
                        <div class="loader-inline" v-if="chat.mensagensAnteriores">
                            <span class="elemento"></span>
                        </div>
                        <span class="mensagem" :id="'msg-'+mensagem.id" v-for="mensagem in chat.mensagens" :key="mensagem.id" :class="{'autor': mensagem.usuario_id == usuario_id }">
                            {{ mensagem.mensagem }}
                        </span>
                    </div>
                    <Transition name="fade-transition" :duration="100">
                        <button class="novas-mensagens" v-if="chat.novasMensagens" @click="novasMensagens">
                            <span>Novas Mensagens</span>
                        </button>
                    </Transition>
                </div>
                <form @submit.prevent="enviarMensagem" class="mensagens-footer">
                    <textarea class="form-control" v-model="chat.mensagem" :maxlength="maxlengthText" rows="3"></textarea>
                    <div class="col">
                        <button type="submit" class="btn btn-primary">Enviar</button>
                        <span class="textcount">{{ chat.mensagem.length + ' / ' + maxlengthText }}</span>
                    </div>
                </form>
            </div>
        </div>
    </SiteLayout>
</template>
