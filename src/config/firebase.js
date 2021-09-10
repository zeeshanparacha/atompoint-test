import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4RO674xRtOGgqSXi3uibEVGeZXa2IPks",
  authDomain: "atompoint-employee-record.firebaseapp.com",
  databaseURL: "https://atompoint-employee-record-default-rtdb.firebaseio.com",
  projectId: "atompoint-employee-record",
  storageBucket: "atompoint-employee-record.appspot.com",
  messagingSenderId: "629786536969",
  appId: "1:629786536969:web:01b11eb1461626b2531cd8",
  measurementId: "G-03HT25ERYB"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

