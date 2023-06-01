import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { usePage } from '@inertiajs/vue3'
import { onMounted } from 'vue'
import EventoNotificacaoWS from '@/Componentes/Eventos/EventoNotificacaoWS'
import Notificacao from './NotificacaoModel'
import MensagemExcluida from '../Eventos/MensagemExcluida'
import NovaMensagem from '@/Componentes/Eventos/NovaMensagem'

const options = {
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: false,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    wssPort: import.meta.env.VITE_PUSHER_PORT,
    authEndpoint: '/broadcasting/auth',
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
}

let userId = null
let channel = null

export default function conectarWS() {
    onMounted(() => {
        iniciarNotificacoes()
    })
}

function iniciarNotificacoes() {
    if (userId === usePage()?.props?.auth?.user?.id) {
        return
    }

    if (channel) {
        window.Echo.leave(channel)
    }

    userId = usePage()?.props?.auth?.user?.id
    if (!userId) {
        return
    }

    iniciarPusher()
}

function iniciarPusher() {
    window.debugWebsockets = !!import.meta.env.VITE_DEBUG_WEBSOCKETS
    window.Echo = new Echo({
        ...options,
        client: new Pusher(options.key, options),
    })

    channel = `notificacoes.${userId}`
    window.Echo.private(channel)
        .listen('.ConversaWebSocket', (e) => conversaWebSocket(e))
        .listen('.NotificacaoWebSocket', (e) => notificacaoWebSocket(e))
        .listenToAll((a, b) => {
            if (window.debugWebsockets) {
                /* eslint-disable-next-line no-console */
                console.log(a, b)
            }
        })

    window.Pusher = Pusher
}

function conversaWebSocket(e) {
    switch (e.notification.tipo) {
    case 'nova-mensagem':
        novaMensagemEvento(e)
        break
    case 'mensagem-excluida':
        mensagemExcuidaEvento(e)
        break
    default:
        break
    }
}

function notificacaoWebSocket(e) {
    const evento = new EventoNotificacaoWS()
    evento.notificacao = new Notificacao()
    evento.notificacao.id = e.notification.notificacao.id
    evento.notificacao.status = e.notification.notificacao.status
    evento.notificacao.usuario_id = e.notification.notificacao.usuario_id
    evento.notificacao.titulo = e.notification.notificacao.titulo
    evento.notificacao.texto = e.notification.notificacao.texto
    evento.qtdNotificacoesUsuario = e.notification.qtdNotificacoesUsuario
    evento.notify()
}

function mensagemExcuidaEvento(e) {
    const evento = new MensagemExcluida()
    evento.mensagem_id = e.notification.mensagem.id
    evento.equipamento_conversa_id = e.notification.mensagem.equipamento_conversa_id
    evento.notify()
}

function novaMensagemEvento(e) {
    const evento = new NovaMensagem()
    evento.mensagem_id = e.notification.mensagem.id
    evento.mensagem = e.notification.mensagem.mensagem
    evento.usuario_id = e.notification.mensagem.usuario_id
    evento.equipamento_conversa_id = e.notification.mensagem.equipamento_conversa_id
    evento.notify()
}
