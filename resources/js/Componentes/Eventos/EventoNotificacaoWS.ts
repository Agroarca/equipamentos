import Notificacao from '@/Componentes/Notificacao/NotificacaoModel'
import Evento from './Evento'
import Listener from './Listener'

export default class EventoNotificacaoWS implements Evento {
    cancelled = false
    notificacao: Notificacao

    static listeners: Array<Listener> = []

    static addListener = function (listener: Listener): void {
        EventoNotificacaoWS.listeners.push(listener)
        EventoNotificacaoWS.listeners.sort((a: Listener, b: Listener) => a.priority - b.priority)
    }

    notify = () => {
        EventoNotificacaoWS.listeners.forEach((listener) => {
            if (!this.cancelled) {
                listener.callback(this)
            }
        })
    }
}
