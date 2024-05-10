// Import the functions you need from the SDKs you need
import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkoBoIGyQZjvYsrYDvVy6v3gDffTbrBDg",
  authDomain: "tpf-lab2-382da.firebaseapp.com",
  projectId: "tpf-lab2-382da",
  storageBucket: "tpf-lab2-382da.appspot.com",
  messagingSenderId: "806421513328",
  appId: "1:806421513328:web:5d115077cef38cdcaa20b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const userSignIn = async () => {
    signInWithPopup(auth,
    provider).then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

const userSignOut = async () => {
    signOut(auth).then(() => {
    alert("You have been signed out!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        alert("You are authenticated with Google");
        console.log(user);
    }
})

signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click",userSignOut);  