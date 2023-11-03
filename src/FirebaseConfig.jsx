
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCx8CP7EdyhFfeM9Tz46Ymf0FGWJV48uv8",
  authDomain: "fir-project-379d9.firebaseapp.com",
  projectId: "fir-project-379d9",
  storageBucket: "fir-project-379d9.appspot.com",
  messagingSenderId: "1055795925611",
  appId: "1:1055795925611:web:19e4917eb621728c10d72e",
  measurementId: "G-LKNWHHSBBS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getAuth(app)