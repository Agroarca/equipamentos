import Evento from "./Evento"
import Listener from "./Listener"

export default class EventoConversa implements Evento {
    cancelled = false
    equipamento_conversa_id: number
    usuario_id: number
    mensagem: string
    mensagem_id: number

    static listeners: Array<Listener> = []

    static addListener = function (listener: Listener): void {
        EventoConversa.listeners.push(listener)
        EventoConversa.listeners.sort((a: Listener, b: Listener) => a.priority - b.priority)
    }

    notify = () => {
        for (let listener of EventoConversa.listeners) {
            listener.callback(this)

            if (this.cancelled) {
                break
            }
        }
    }
}
