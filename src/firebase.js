// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BsCFhF0N5qLQmlanftskwRj96n7aAbA",
  authDomain: "task-management-22b90.firebaseapp.com",
  projectId: "task-management-22b90",
  storageBucket: "task-management-22b90.appspot.com",
  messagingSenderId: "528241458677",
  appId: "1:528241458677:web:62146d938100bbfe40f4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;