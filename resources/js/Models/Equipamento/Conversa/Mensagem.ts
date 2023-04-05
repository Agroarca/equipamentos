/* eslint-disable camelcase */
export default class Mensagem {
    id: number
    mensagem: string
    usuario_id: number
    created_at: Date
    loading: boolean

    constructor(id, mensagem, usuario_id, created_at, loading = false) {
        this.id = id
        this.mensagem = mensagem
        this.usuario_id = usuario_id
        this.created_at = created_at
        this.loading = loading
    }

    static converterArray(mensagens) {
        return mensagens.map((m) => new Mensagem(m.id, m.mensagem, m.usuario_id, m.created_at))
    }
}
