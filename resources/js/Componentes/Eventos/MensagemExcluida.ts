import Evento from './Evento'
import Listener from './Listener'

export default class MensagemExcluida implements Evento {
    cancelled = false
    equipamento_conversa_id: number
    usuario_id: number
    mensagem: string
    mensagem_id: number

    static listeners: Array<Listener> = []

    static addListener = function addListener(listener: Listener): void {
        if (listener.key) {
            MensagemExcluida.removerListenerKey(listener.key)
        }

        MensagemExcluida.listeners.push(listener)
        MensagemExcluida.listeners.sort((a: Listener, b: Listener) => a.priority - b.priority)
    }

    notify = () => {
        MensagemExcluida.listeners.forEach((listener) => {
            if (!this.cancelled) {
                listener.callback(this)
            }
        })
    }

    static removerListenerKey = function (key: string): void {
        this.listeners = this.listeners.filter((l) => l.key !== key)
    }
}
