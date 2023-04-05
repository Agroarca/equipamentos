/* eslint-disable camelcase */
export default class Visualizacao {
    id: number
    usuario_id: number
    ultima_mensagem_id: number

    constructor(id, usuario_id, ultima_mensagem_id) {
        this.id = id
        this.usuario_id = usuario_id
        this.ultima_mensagem_id = ultima_mensagem_id
    }
}
