import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";

const firebaseConfig = {
    apiKey: "AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",
    authDomain: "agroarca-equipamentos.firebaseapp.com",
    projectId: "agroarca-equipamentos",
    messagingSenderId: "260002359203",
    appId: "1:260002359203:web:8c19a187bf2fe28079dc16",
    measurementId: "G-DHSLGFC76R"
}

const vapidKey = "BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU"

let instance;

export class Push {
    app
    messaging
    analytics
    contexto

    constructor() {
        this.app = initializeApp(firebaseConfig)
        this.messaging = getMessaging(this.app)
        this.analytics = getAnalytics(this.app)
    }

    solicitarPermissao(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            if (Notification.permission === 'denied') {
                reject()
                return
            }

            if (Notification.permission === 'granted') {
                resolve()
                return
            }

            Notification.requestPermission().then((permission) => {

                if (Notification.permission === 'granted') {
                    resolve()
                    return
                }

                reject()
            })
        })
    }

    iniciarNotificacoes(): void {
        this.contexto = 'app'
        onMounted(() => {
            this.solicitarPermissao().then(this.registrarListeners)
        })

    }

    iniciarServiceWorker(): void {
        this.contexto = 'worker'
        if (Notification.permission === "granted") {
            this.registrarListeners()
        }
    }

    registrarListeners(): void {
        getToken(instance.messaging, { vapidKey: vapidKey }).then((token) => {
            if (token) {
                instance.salvarToken(token)
            }
        })

        onMessage(instance.messaging, instance.onMessage)
    }

    salvarToken(token): void {
        console.log('token:')
        console.log(token)
    }

    onMessage(payload): void {
        this.notificar(this.contexto + ' onMessage ' + JSON.stringify(payload))
    }

    notificar(texto): void {
        new Notification(texto)
    }
}

export function getPush(): Push {
    if (instance) return instance;

    instance = new Push()
    return instance
}
