import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

// const firebaseConfig = {
//     apiKey: process.env.local.REACT_API_KEY,
//     authDomain: process.env.local.REACT_AUTH_DOMAIN,
//     projectId: process.env.local.REACT_PROJECT_ID,
//     storageBucket: process.env.local.REACT_STOARGE_BUCKET,
//     messagingSenderId: process.env.local.REACT_MESSAGING_SENDER_ID,
//     appId: process.env.local.REACT_APP_ID,
//     measurementId: process.env.local.REACT_MEASUREMENT_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyBqKw_-devSf5bbwdzTrZJ1dQlB3M7Qdz8",
    authDomain: "react-firebase-app-71a00.firebaseapp.com",
    projectId: "react-firebase-app-71a00",
    storageBucket: "react-firebase-app-71a00.appspot.com",
    messagingSenderId: "400911500791",
    appId: "1:400911500791:web:2520b571e121d23a5c1af2",
    measurementId: "G-RN4PT464EK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
