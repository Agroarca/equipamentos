<script setup>
    import SiteLayout from '@/Layouts/SiteLayout.vue';
    import { useForm } from "@inertiajs/inertia-vue3";
    import { debounce } from 'lodash';
    import { ref, reactive, nextTick, onMounted } from 'vue';
    import axios from 'axios';

    const scrollMargin = 25;
    const elMensagens = ref(null);
    const props = defineProps(['conversa', 'usuario_id'])
    const scroll = debounce(onScroll, 100, {maxWait: 250})
    const enviarUltimaVisualizacao = debounce(dEnviarUltimaVisualizacao, 500, {maxWait: 10000})

    const form = useForm({
        mensagem: '',
    })

    const _chat = reactive({
        antes: props.conversa.mensagens.length > 0,
        depois: props.conversa.mensagens.length > 0,
        mensagens: props.conversa.mensagens,
        visualizada: props.conversa.visualizacao.ultima_mensagem_id,
    })

    onMounted(() => {
        let proximaMensagem = _chat.mensagens.findLast(m => m.id <= _chat.visualizada)

        if(proximaMensagem){
            setMensagensScrolltop(getOffsetMensagem(proximaMensagem.id) - (elMensagens.value.clientHeight / 2))
        }else{
            setMensagensScrolltop(elMensagens.value.querySelector('.loader-inline').clientHeight)
        }
    })

    function submit() {
        form.post(route('site.conversa.enviar', props.conversa.equipamento.id), {
            onSuccess: () => form.reset('mensagem'),
            preserveScroll: true
        })
    }

    function onScroll(event){

        if(elMensagens.value.scrollTop <= scrollMargin){
            atualizarMensagensAnteriores()
        }

        let ultimaVisualizada = getUltimaMensagemVisualizada();
        if(ultimaVisualizada && ultimaVisualizada.id > _chat.visualizada){
            _chat.visualizada = ultimaVisualizada.id
            enviarUltimaVisualizacao()
        }
    }

    function atualizarMensagensAnteriores(){
        if(!_chat.antes){
            return;
        }
        let mensagemId = _chat.mensagens[0].id
        axios.get(route('site.conversa.mensagens.anteriores', [props.conversa.id, mensagemId]))
        .then((response) => {
            _chat.mensagens = response.data.mensagens.concat(_chat.mensagens);
            _chat.antes = response.data.mais
            nextTick(()=>{
                setMensagensScrolltop(getOffsetMensagem(mensagemId));
            })
        })
    }

    function getOffsetMensagem(id){
        return elMensagens.value.querySelector('#msg-' + id).offsetTop - elMensagens.value.offsetTop;
    }

    function getMensagemVisualizada(id){
        let el = elMensagens.value.querySelector('#msg-' + id)

        let elOffset = el.offsetTop + el.clientHeight - el.parentElement.offsetTop
        return elOffset > el.parentElement.scrollTop && elOffset < el.parentElement.scrollTop + el.parentElement.clientHeight
    }

    function getUltimaMensagemVisualizada(){
        let idxUltima = _chat.mensagens.findIndex(m => m.id > _chat.visualizada)
        return _chat.mensagens.slice(idxUltima).findLast(m => getMensagemVisualizada(m.id))
    }

    function dEnviarUltimaVisualizacao(mensagem){
        axios.post(route('site.conversa.mensagens.visualizacao', [props.conversa.id, _chat.visualizada]))
    }

    function setMensagensScrolltop(px){
        elMensagens.value.scrollTop = px

        setTimeout(() => {
            scroll.cancel()
        }, 100)
    }
</script>

<template>
    <SiteLayout>
        <div class="container conversa">
            <h2>Conversa - {{ conversa.equipamento.titulo }}</h2>
            <div class="conteudo">
                <div class="mensagens" @scroll="scroll" ref="elMensagens">
                    <div class="loader-inline" v-if="_chat.antes">
                        <span class="elemento"></span>
                    </div>
                    <span class="mensagem" :id="'msg-'+mensagem.id" v-for="mensagem in _chat.mensagens" :key="mensagem.id" :class="{'autor': mensagem.usuario_id == usuario_id }">
                        {{ mensagem.id }} - {{ mensagem.mensagem }}
                    </span>
                </div>
                <form @submit.prevent="submit" class="mensagens-footer">
                    <textarea class="form-control" v-model="form.mensagem"></textarea>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    </SiteLayout>
</template>
