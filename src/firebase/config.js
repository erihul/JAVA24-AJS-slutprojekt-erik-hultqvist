// config.js
// Sets up a connetcion to the firebase realtime database

import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA47a-q2O0c9udqAEE3xO2jRonWtsQWFeQ",
  authDomain: "scrumboard-38168.firebaseapp.com",
  databaseURL: "https://scrumboard-38168-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "scrumboard-38168",
  storageBucket: "scrumboard-38168.firebasestorage.app",
  messagingSenderId: "881707782018",
  appId: "1:881707782018:web:111fb3f746851b94b5c99b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const assignmentRef = ref(database, '/scrumboard/assignments');
export const membersRef = ref(database, '/scrumboard/members');