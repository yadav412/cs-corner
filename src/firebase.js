import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADJRdG7tTbakWmYaJv0ebwxH9W-LR2QkY",
  authDomain: "cs-corner-f2e0f.firebaseapp.com",
  projectId: "cs-corner-f2e0f",
  storageBucket: "cs-corner-f2e0f.firebasestorage.app",
  messagingSenderId: "244030902169",
  appId: "1:244030902169:web:865c29771540cfd1edcd08",
  measurementId: "G-8451SMXCZH"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);