// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaepuXVrEWlqpXeXZCYj_TfeXg2U2b460",
  authDomain: "gift-finder-mc.firebaseapp.com",
  projectId: "gift-finder-mc",
  storageBucket: "gift-finder-mc.appspot.com",
  messagingSenderId: "178084520461",
  appId: "1:178084520461:web:b36bfd43dd280f82f76b44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);