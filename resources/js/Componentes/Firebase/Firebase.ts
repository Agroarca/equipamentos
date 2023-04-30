/* eslint-disable no-console */
/* eslint-disable prefer-promise-reject-errors */

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getMessaging, getToken } from 'firebase/messaging'
import { getPerformance } from 'firebase/performance'

let instance

export class Firebase {
    firebaseConfig = {
        apiKey: 'AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE',
        authDomain: 'agroarca-equipamentos.firebaseapp.com',
        projectId: 'agroarca-equipamentos',
        messagingSenderId: '260002359203',
        appId: '1:260002359203:web:8c19a187bf2fe28079dc16',
        measurementId: 'G-DHSLGFC76R',
    }

    vapidKey: string = 'BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU'

    app
    messaging = null
    analytics = null
    performance = null

    constructor() {
        this.app = initializeApp(this.firebaseConfig)

        let firebaseHabilitado: boolean = import.meta.env.VITE_FIREBASE_HABILITADO
        if (!firebaseHabilitado) {
            console.warn('Firebase Desabilitado. Ignorando Setup')
            return
        }

        this.loadMessaging()
        this.loadAnalytics()
        this.loadPerformance()
    }

    loadMessaging(): void {
        try {
            this.messaging = getMessaging(this.app)
        } catch (error) {
            console.error(error)
        }
    }

    loadAnalytics(): void {
        try {
            this.analytics = getAnalytics(this.app)
        } catch (error) {
            console.error(error)
        }
    }

    loadPerformance(): void {
        try {
            this.performance = getPerformance(this.app)
        } catch (error) {
            console.error(error)
        }
    }

    getMessagingToken() {
        if (this.messaging === null) {
            return new Promise(() => {
                console.warn('Firebase Messaging não carregado, ignorando getToken')
            })
        }

        return getToken(this.messaging, { vapidKey: this.vapidKey })
    }
}

export default function getFirebase(): Firebase {
    if (!instance) {
        instance = new Firebase()
    }

    return instance
}
