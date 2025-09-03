// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBnBjnfbt2N6LHxBVkSMmEuu_51JI0NHzI",
  authDomain: "artisan-3b8d6.firebaseapp.com",
  databaseURL: "https://artisan-3b8d6-default-rtdb.firebaseio.com",
  projectId: "artisan-3b8d6",
  storageBucket: "artisan-3b8d6.firebasestorage.app",
  messagingSenderId: "63442588763",
  appId: "1:63442588763:web:72a583c2a6a1f26d63db7e",
  measurementId: "G-01922BTK99"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


