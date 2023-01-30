<script setup lang="ts">

import setupNotificacoes from '@/Components/Notificacoes';
import { onMounted, ref } from 'vue';
import Notificacao from './Notificacao.vue';
import EventoNotificacaoWS from '@/Components/Eventos/EventoNotificacaoWS'
import Listener from '@/Components/Eventos/Listener';
import NotificacaoModel from '@/Components/Models/Notificacao';
setupNotificacoes()

let notificacoes = ref([])
EventoNotificacaoWS.addListener(new Listener(eventoNotificacao))
function eventoNotificacao(e: EventoNotificacaoWS){
    notificacoes.value.push(e.notificacao)

    setTimeout(() => {
        const index = notificacoes.value.indexOf(e.notificacao)
        notificacoes.value.splice(index, 1)
    }, 100000);
}
</script>

<template>
    <div class="toast-container position-fixed top-0 end-0 p-3">
        <template v-for="notificacao in notificacoes">
            <Notificacao v-bind="notificacao" />
        </template>
    </div>
</template>
