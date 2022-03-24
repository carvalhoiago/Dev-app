import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import firebase from 'firebase/compat/app';
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAr_TpAwfXko8O9xfuzHnit7v97h6RezgY",
  authDomain: "meau-app-5ec8e.firebaseapp.com",
  projectId: "meau-app-5ec8e",
  storageBucket: "meau-app-5ec8e.appspot.com",
  messagingSenderId: "392470537422",
  appId: "1:392470537422:web:9938510afc407a437c9c9f",
  measurementId: "G-ZFXQT5HHW4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(db);
export const storage = getStorage(app)