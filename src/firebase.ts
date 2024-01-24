import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUJF8YDPUvLPpuhG1wTgmEVixzYwxzOOQ",
  authDomain: "links-b120e.firebaseapp.com",
  projectId: "links-b120e",
  storageBucket: "links-b120e.appspot.com",
  messagingSenderId: "640541004318",
  appId: "1:640541004318:web:0ab1a1b8f82f8b8326d40f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
