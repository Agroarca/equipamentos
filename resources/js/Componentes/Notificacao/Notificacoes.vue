<script setup lang="ts">

import { ref } from 'vue'
import setupNotificacoes from '@/Componentes/Notificacao/NotificacaoService'
import Notificacao from './Notificacao.vue'
import EventoNotificacaoWS from '@/Componentes/Eventos/EventoNotificacaoWS'
import Listener from '@/Componentes/Eventos/Listener'

setupNotificacoes()

const notificacoes = ref([])

EventoNotificacaoWS.addListener(new Listener(eventoNotificacao, 'componentes.notificacao.notificacoes'))
function eventoNotificacao(e: EventoNotificacaoWS) {
    notificacoes.value.push(e.notificacao)

    setTimeout(() => {
        const index = notificacoes.value.indexOf(e.notificacao)
        notificacoes.value.splice(index, 1)
    }, 100000)
}
</script>

<template>
    <div class="toast-container position-fixed top-0 end-0 p-3">
        <template v-for="notificacao in notificacoes" :key="notificacao.id">
            <Notificacao v-bind="notificacao" />
        </template>
    </div>
</template>
