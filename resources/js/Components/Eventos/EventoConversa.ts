import { isGloballyWhitelisted } from "@vue/shared"
import { forEach } from "lodash"
import Evento from "./Evento"
import Listener from "./Listener"

export default class EventoConversa implements Evento {
    equipamento_conversa_id
    usuario_id
    mensagem
    mensagem_id
    cancelled = false

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
