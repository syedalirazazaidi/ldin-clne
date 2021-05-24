import firebase from "firebase";
import "firebase/database";
// require("dotenv").config();
const firebaseConfig = {
  apiKey: "AIzaSyCcJwRmYZtvpTaNgojKL8Y9_gbf_Vsb-1M",
  authDomain: "lkdenclone.firebaseapp.com",
  projectId: "lkdenclone",
  storageBucket: "lkdenclone.appspot.com",
  messagingSenderId: "1022051220728",
  appId: "1:1022051220728:web:ac2a95bbf4d7f5ff48cf0d",
  measurementId: "G-HHE099RKWV",
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.projectId,
  // storageBucket: process.env.storageBucket,
  // messagingSenderId: process.env.messagingSenderId,
  // appId: process.env.appId,
  // measurementId: process.env.measurementId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
