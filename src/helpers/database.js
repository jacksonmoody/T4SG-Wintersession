import { db } from './firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

export async function addUser(uid, name, authProvider, email, description = "") {
   await addDoc(collection(db, "users"), {
      uid: uid,
      name: name,
      authProvider: authProvider,
      email: email,
      description: description
   });
}

export async function updateUser(user) {
   const entryRef = doc(db, "users", user.uid);
   await updateDoc(entryRef, {
      uid: user.uid,
      name: user.name,
      authProvider: user.authProvider,
      email: user.email,
      description: user.description
   });
}

export async function deleteUser(user) {
   await deleteDoc(doc(db, "users", user.uid));
}