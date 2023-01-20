export default class EventoConversa {
    equipamento_conversa_id
    usuario_id
    mensagem
    mensagem_id
    cancelled = false

    static listeners = []

    static addListener(callback) {
        EventoConversa.listeners.push(callback)
    }

    notify() {
        EventoConversa.listeners.forEach(callback => {
            callback(this)
        });
    }
}
