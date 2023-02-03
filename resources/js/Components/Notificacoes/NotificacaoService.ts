import conectarWS from "./Websocket"
import { getPush } from "./Push"

export default function setupNotificacoes() {
    conectarWS()
    getPush().iniciarNotificacoes()
}
