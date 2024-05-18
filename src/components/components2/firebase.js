


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBePJcbQkiJ_lC_tBMboKZ-17ADm1bHiR4",
  authDomain: "final-project-6666d.firebaseapp.com",
  projectId: "final-project-6666d",
  storageBucket: "final-project-6666d.appspot.com",
  messagingSenderId: "88567634642",
  appId: "1:88567634642:web:c2b9886c658cf7e7ff6b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth