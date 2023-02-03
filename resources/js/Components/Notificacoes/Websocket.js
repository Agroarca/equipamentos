import Echo from "laravel-echo";
import Pusher from 'pusher-js';
import { usePage } from "@inertiajs/vue3";
import { onMounted } from "vue";
import EventoConversa from "../Eventos/EventoConversa";
import EventoNotificacaoWS from "../Eventos/EventoNotificacaoWS";
import Notificacao from "../Models/Notificacao";

const options = {
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: false,
    wsHost: import.meta.env.VITE_PUSHER_HOST,
    wsPort: import.meta.env.VITE_PUSHER_PORT,
    wssPort: import.meta.env.VITE_PUSHER_PORT,
    authEndpoint: '/broadcasting/auth'
}

export default function conectarWS() {
    onMounted(() => {
        window.Echo = new Echo({
            ...options,
            client: new Pusher(options.key, options),
        })

        if (!usePage()?.props?.auth?.user) {
            return;
        }

        window.Echo.private('notificacoes.' + usePage().props.auth.user.id)
            .listen('.ConversaWebSocket', (e) => conversaWebSocket(e))
            .listen('.NotificacaoWebSocket', (e) => notificacaoWebSocket(e))
            .listenToAll((e, d) => console.log([e, d]))

        window.Pusher = Pusher
    })

}

function conversaWebSocket(e) {
    let evento = new EventoConversa();
    evento.mensagem_id = e.notification.mensagem.id
    evento.mensagem = e.notification.mensagem.mensagem
    evento.usuario_id = e.notification.mensagem.usuario_id
    evento.equipamento_conversa_id = e.notification.mensagem.equipamento_conversa_id
    evento.notify()
}

function notificacaoWebSocket(e) {
    console.log('notificacaows')
    let evento = new EventoNotificacaoWS();
    evento.notificacao = new Notificacao()
    evento.notificacao.id = e.notification.notificacao.id
    evento.notificacao.visualizado = e.notification.notificacao.visualizado
    evento.notificacao.usuario_id = e.notification.notificacao.usuario_id
    evento.notificacao.titulo = e.notification.notificacao.titulo
    evento.notificacao.texto = e.notification.notificacao.texto
    evento.notify()
}
