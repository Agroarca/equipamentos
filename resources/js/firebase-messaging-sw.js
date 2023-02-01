importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

const firebaseConfig = {
    messagingSenderId: "260002359203",
}

firebase.initializeApp(firebaseConfig)
let messaging = firebase.messaging()

//onMessage(messaging, onSwMessage)

//function onSwMessage(payload) {
//    new Notification('SW Notification ' + JSON.stringify(payload))
//}
