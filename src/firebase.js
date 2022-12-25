import {initializeApp} from "firebase/app"

import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP9JcuVgF-O0-_lnMiSed28l0OKPgWJ54",
  authDomain: "t4sg-wintersession.firebaseapp.com",
  projectId: "t4sg-wintersession",
  storageBucket: "t4sg-wintersession.appspot.com",
  messagingSenderId: "76655550196",
  appId: "1:76655550196:web:ed9e2d47f02be2a47e08a1",
  measurementId: "G-J0HJZ6LPTT"
};
 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

async function signInWithGoogle(){
   try {
      await signInWithRedirect(auth, provider);
   } catch (err) {
      console.error(err);
      alert("Error logging in with Google. Please try again.");
   }
}

async function loginWithEmailAndPassword(email, password){
   try {
      await signInWithEmailAndPassword(auth, email, password);
   } catch (err) {
      console.error(err);
      alert("Invalid username/password. Please try again.");
   }
}

async function registerWithEmailAndPassword(name, email, password){
   try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
         uid: user.uid,
         name,
         authProvider: "local",
         email,
      });
      await updateProfile(auth.currentUser, { displayName: name })
   } catch (err) {
      console.error(err);
      //alert("Error with registration. Please enter a valid email and password and try again.");
   }
}

export {
  auth,
  db,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword
};