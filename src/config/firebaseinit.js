// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe8xj60GONgzLl0GlsWjOjdykmD7XZkn4",
  authDomain: "irctc-app-bed90.firebaseapp.com",
  projectId: "irctc-app-bed90",
  storageBucket: "irctc-app-bed90.firebasestorage.app",
  messagingSenderId: "501899266707",
  appId: "1:501899266707:web:7eebaf406d74734d1b5b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

export {app, googleProvider, auth, db};