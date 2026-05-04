import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDAx9VwrkL7BDDalTZKgDZTZZsfJ9BqIVI",
    authDomain: "portfolio-4c032.firebaseapp.com",
    projectId: "portfolio-4c032",
    storageBucket: "portfolio-4c032.firebasestorage.app",
    messagingSenderId: "1081383689554",
    appId: "1:1081383689554:web:25e0759a86a81d13fb6e8b",
    measurementId: "G-9ZHEMDC3YH"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
