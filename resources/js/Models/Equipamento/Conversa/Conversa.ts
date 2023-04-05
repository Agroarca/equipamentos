/* eslint-disable camelcase */
import Mensagem from './Mensagem'
import Visualizacao from './Visualizacao'

export default class Conversa {
    id: number
    equipamento_id: number
    visualizacao: Visualizacao
    mensagens: Mensagem[]

    constructor(id, equipamento_id, visualizacao, mensagens) {
        this.id = id
        this.equipamento_id = equipamento_id
        this.visualizacao = visualizacao
        this.mensagens = mensagens.map((m) => new Mensagem(m.id, m.mensagem, m.usuario_id, m.created_at))
    }
}
