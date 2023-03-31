import { getPush } from './Push'
import conectarWS from './Websocket'

export default function setupNotificacoes() {
    conectarWS()
    getPush().iniciarNotificacoes()
}
