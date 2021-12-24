import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeVF0zkoqnAVqrGU-4W9PnxFVulewBY9k",
  authDomain: "swipe-up-85c4f.firebaseapp.com",
  projectId: "swipe-up-85c4f",
  storageBucket: "swipe-up-85c4f.appspot.com",
  messagingSenderId: "916994729212",
  appId: "1:916994729212:web:79add77ac6d6f9353ea379",
  measurementId: "G-J0FB7YDRFV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;