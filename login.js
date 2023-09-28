// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcK414Ulp6y4WI14DaSJwZztGpIdPWwpw",
    authDomain: "login-signuup.firebaseapp.com",
    projectId: "login-signuup",
    storageBucket: "login-signuup.appspot.com",
    messagingSenderId: "4853986543",
    appId: "1:4853986543:web:4c9307a165d89321f4171a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var Email = document.getElementById('email');
var Password = document.getElementById('password');

window.login = function(e) {
    e.preventDefault();
    var obj = {
        email:Email.value,
        password:Password.value
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(userCredential) {
        var user = userCredential.user;
        console.log(user.uid);
        alert("Login Successfull");
        window.location.href='./responsiveweb.html';
    })
    .catch(function(err) {
        console.log("Login failed");
        alert("Error: " + err );
    })
    console.log(obj);
}