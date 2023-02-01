import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDK6yPqneJ5TafOA_AySHcCw0wps_F8CPE",
    authDomain: "agroarca-equipamentos.firebaseapp.com",
    projectId: "agroarca-equipamentos",
    messagingSenderId: "260002359203",
    appId: "1:260002359203:web:8c19a187bf2fe28079dc16",
    measurementId: "G-DHSLGFC76R"
}

const vapidKey = "BPlE43kDpMP4nb3ltOOZZRDDxkJA-CKsdim6elA8c5amJmykNZl-_UmxsRGJGe1P3I0R50Qgwyf7Tlaf9ICUcqU"

let app = initializeApp(firebaseConfig)
let messaging = getMessaging(app)

onMessage(messaging, onSwMessage)

function onSwMessage(payload) {
    new Notification('SW Notification ' + JSON.stringify(payload))
}
