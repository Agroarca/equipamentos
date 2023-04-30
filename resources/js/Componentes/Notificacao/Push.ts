import axios from 'axios'
import { addDays, isAfter, isBefore, isDate } from 'date-fns'
import getFirebase, { Firebase } from '../Firebase/Firebase'

const DIAS_PARA_RENOVAR_TOKEN = 14

let instance

export class Push {
    firebase: Firebase

    constructor() {
        this.firebase = getFirebase()
    }

    solicitarPermissao(): Promise<void> {
        return this.solicitarPermissaoNotificacoes().then(this.criarToken)
    }

    solicitarPermissaoNotificacoes(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (Notification.permission === 'denied') {
                reject()
                return
            }

            if (Notification.permission === 'granted') {
                resolve()
                return
            }

            localStorage.dataSolicitouPermNotificacao = new Date()
            Notification.requestPermission().then(() => {
                if (Notification.permission === 'granted') {
                    resolve()
                    return
                }

                reject()
            })
        })
    }

    iniciarNotificacoes(): void {
        if (Notification.permission === 'granted') {
            if (this.precisaRenovarToken()) {
                this.criarToken()
            }
        }
    }

    criarToken(): void {
        getPush().firebase.getMessagingToken().then((token) => {
            if (token) {
                instance.salvarToken(token)
            }
        })
    }

    salvarToken(token): void {
        axios.post('/notificacao/token', {
            token,
        }).then(() => {
            localStorage.ultimaRenovacaoToken = new Date()
        })
    }

    precisaRenovarToken(): Boolean {
        let ultimaRenovacao = Date.parse(localStorage.ultimaRenovacaoToken)

        if (!isDate(ultimaRenovacao)) {
            return false
        }

        return isAfter(new Date(), addDays(new Date(ultimaRenovacao), DIAS_PARA_RENOVAR_TOKEN))
    }

    temPermissao(): boolean {
        return Notification.permission === 'granted'
    }

    jaSolicitouPermissao(): boolean {
        let dataPerm = new Date(Date.parse(localStorage.dataSolicitouPermNotificacao))
        if (isDate(dataPerm)) {
            return isBefore(new Date(), addDays(new Date(dataPerm), DIAS_PARA_RENOVAR_TOKEN))
        }

        return false
    }
}

export function getPush(): Push {
    if (instance) return instance

    instance = new Push()
    return instance
}
