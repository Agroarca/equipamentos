import Notificacao from '@/Componentes/Notificacao/NotificacaoModel'
import Evento from './Evento'
import Listener from './Listener'

export default class EventoNotificacaoWS implements Evento {
    cancelled = false
    notificacao: Notificacao
    qtdNotificacoesUsuario: number

    static listeners: Array<Listener> = []

    static addListener = function (listener: Listener): void {
        if (listener.key) {
            EventoNotificacaoWS.removerListenerKey(listener.key)
        }

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

    static removerListenerKey = function (key: string): void {
        this.listeners = this.listeners.filter((l) => l.key !== key)
    }
}
