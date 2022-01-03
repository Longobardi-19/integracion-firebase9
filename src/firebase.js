// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi3HzY1yM-Sd-oWV0uMIsMZHNK8KTeEuk",
  authDomain: "integracion-firebase2022.firebaseapp.com",
  projectId: "integracion-firebase2022",
  storageBucket: "integracion-firebase2022.appspot.com",
  messagingSenderId: "580160022649",
  appId: "1:580160022649:web:4d7def5e5d9f3c678a4ca8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;