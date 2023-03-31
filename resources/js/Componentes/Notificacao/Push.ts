import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'
import axios from 'axios'
import { addDays, isAfter, isBefore, isDate } from 'date-fns'

const firebaseConfig = {
    apiKey: 'AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE',
    authDomain: 'agroarca-equipamentos.firebaseapp.com',
    projectId: 'agroarca-equipamentos',
    messagingSenderId: '260002359203',
    appId: '1:260002359203:web:8c19a187bf2fe28079dc16',
    measurementId: 'G-DHSLGFC76R',
}

const vapidKey = 'BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU'
const DIAS_PARA_RENOVAR_TOKEN = 14

let instance

export class Push {
    app
    messaging
    analytics

    constructor() {
        this.app = initializeApp(firebaseConfig)
        this.messaging = getMessaging(this.app)
        this.analytics = getAnalytics(this.app)
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
        getToken(instance.messaging, { vapidKey }).then((token) => {
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

    temPermissao(): Boolean {
        return Notification.permission === 'granted'
    }

    jaSolicitouPermissao(): Boolean {
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
