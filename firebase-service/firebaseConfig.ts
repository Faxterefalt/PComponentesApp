import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCtyHVakas3xNBnqTBOaJsiNl-qN4jODwE",
    //authDomain: "TU_AUTH_DOMAIN", SOLO WEB?
    projectId: "pcomponentesapp-f8047",
    storageBucket: "pcomponentesapp-f8047.firebasestorage.app",
    messagingSenderId: "832481165079",
    appId: "1:832481165079:android:1943c217eca49a6a66c152"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export default app;
