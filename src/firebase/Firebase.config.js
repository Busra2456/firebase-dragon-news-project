// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('inside firebase config',import.meta.env.VITE_PASS)

const firebaseConfig = {


apiKey:import.meta.env.VITE_AUTHDOMAIN,
authDomain:import.meta.env.VITE_PROJECTID,
projectId:import.meta.env.VITE_STORAGEBUCKET,
storageBucket:import.meta.env.VITE_APIKEY,
messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
appId:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// apiKey: "AIzaSyDAcbh48zDBD-m-mEJN_WQFDNloGTle-co",
// authDomain: "fir-dragon-news-project.firebaseapp.com",
// projectId: "fir-dragon-news-project",
// storageBucket: "fir-dragon-news-project.firebasestorage.app",
// messagingSenderId: "602445877185",
// appId: "1:602445877185:web:88257cb6f9723360bb6940"