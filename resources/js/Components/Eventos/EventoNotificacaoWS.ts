import Notificacao from "../Models/Notificacao"
import Evento from "./Evento"
import Listener from "./Listener"

export default class EventoNotificacaoWS implements Evento {
    cancelled = false
    notificacao: Notificacao

    static listeners: Array<Listener> = []

    static addListener = function (listener: Listener): void {
        EventoNotificacaoWS.listeners.push(listener)
        EventoNotificacaoWS.listeners.sort((a: Listener, b: Listener) => a.priority - b.priority)
    }

    notify = () => {
        for (let listener of EventoNotificacaoWS.listeners) {
            listener.callback(this)

            if (this.cancelled) {
                break
            }
        }
    }
}