import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onMounted } from "vue";
import { usePage } from "@inertiajs/vue3";

const firebaseConfig = {
    apiKey: "AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",
    authDomain: "agroarca-equipamentos.firebaseapp.com",
    projectId: "agroarca-equipamentos",
    storageBucket: "agroarca-equipamentos.appspot.com",
    messagingSenderId: "260002359203",
    appId: "1:260002359203:web:8c19a187bf2fe28079dc16",
    measurementId: "G-DHSLGFC76R"
};

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)
const analytics = getAnalytics(app)
let setup = false

function requestPermission() {
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            getToken(messaging, { vapidKey: "BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU" }).then((token) => {
                if (token) {
                    console.log('token:')
                    console.log(token)
                }
            })
        }
    })
}

function meessage(playload) {
    console.log('message')
    console.log(payload)
    new Notification('notificacao')
}

function backgroundMessage(playload) {
    const not = new Notification(JSON.stringify(payload))
}


export default function setupPush() {
    onMounted(() => {
        if (!usePage()?.props?.auth?.user || setup) {
            return;
        }
        requestPermission()

        onMessage(messaging, meessage)
        // onBackgroundMessage(messaging, backgroundMessage)

        setup = true
    })
}
