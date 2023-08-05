import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMAIN,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_STOARGE_BUCKET,
    messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
