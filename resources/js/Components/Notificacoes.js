import conectarWS from "./Notificacoes/Websocket"
import setupPush from "./Notificacoes/Push"

export default function setupNotificacoes() {
    conectarWS()
    setupPush()
}
