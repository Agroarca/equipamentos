import Echo from 'laravel-echo'
import Pusher from 'pusher-js'
import { usePage, router } from '@inertiajs/vue3'
import { onMounted } from 'vue'
import EventoConversa from '../Eventos/EventoConversa'
import EventoNotificacaoWS from '../Eventos/EventoNotificacaoWS'
import Notificacao from '../Models/Notificacao'

const options = {
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: false,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    wssPort: import.meta.env.VITE_PUSHER_PORT,
    authEndpoint: '/broadcasting/auth',
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
    window.Echo = new Echo({
        ...options,
        client: new Pusher(options.key, options),
    })

    channel = `notificacoes.${userId}`
    window.Echo.private(channel)
        .listen('.ConversaWebSocket', (e) => conversaWebSocket(e))
        .listen('.NotificacaoWebSocket', (e) => notificacaoWebSocket(e))

    window.Pusher = Pusher
}

function conversaWebSocket(e) {
    const evento = new EventoConversa()
    evento.mensagem_id = e.notification.mensagem.id
    evento.mensagem = e.notification.mensagem.mensagem
    evento.usuario_id = e.notification.mensagem.usuario_id
    evento.equipamento_conversa_id = e.notification.mensagem.equipamento_conversa_id
    evento.notify()
}

function notificacaoWebSocket(e) {
    const evento = new EventoNotificacaoWS()
    evento.notificacao = new Notificacao()
    evento.notificacao.id = e.notification.notificacao.id
    evento.notificacao.visualizado = e.notification.notificacao.visualizado
    evento.notificacao.usuario_id = e.notification.notificacao.usuario_id
    evento.notificacao.titulo = e.notification.notificacao.titulo
    evento.notificacao.texto = e.notification.notificacao.texto
    evento.notify()
}
