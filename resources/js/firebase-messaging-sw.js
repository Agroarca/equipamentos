/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

const firebaseConfig = {
    messagingSenderId: '260002359203',
}

firebase.initializeApp(firebaseConfig)
firebase.messaging()
