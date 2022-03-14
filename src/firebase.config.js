import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDasIgfXSWmDpQQ3L7kGrgArZELh596r58',
    authDomain: 'house-marketplace-app-90c09.firebaseapp.com',
    projectId: 'house-marketplace-app-90c09',
    storageBucket: 'house-marketplace-app-90c09.appspot.com',
    messagingSenderId: '1064623190946',
    appId: '1:1064623190946:web:dad3ec188a9b1c4b30f8fb'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()