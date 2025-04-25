import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgmF3HKZX0RoaFGKG3EQ69V3gHQKJFexs",
    authDomain: "mockmate-cac82.firebaseapp.com",
    projectId: "mockmate-cac82",
    storageBucket: "mockmate-cac82.firebasestorage.app",
    messagingSenderId: "558859015077",
    appId: "1:558859015077:web:efaaad9a3b49e566834e4c",
    measurementId: "G-7X1C8B3GD8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);