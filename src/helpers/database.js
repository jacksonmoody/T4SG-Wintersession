import { db } from './firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

export async function addUser(uid, name, authProvider, email, onboarded = false, description = "", image = "", preferences = [1,2,3]) {
   await addDoc(collection(db, "users", uid), {
      uid: uid,
      name: name,
      authProvider: authProvider,
      onboarded: onboarded,
      email: email,
      description: description,
      image: image,
      preferences: preferences
   });
}

export async function updateUser(user) {
   const entryRef = doc(db, "users", user.uid);
   await updateDoc(entryRef, {
      uid: user.uid,
      name: user.name,
      authProvider: user.authProvider,
      onboarded: user.onboarded,
      email: user.email,
      description: user.description,
      image: user.image,
      preferences: user.preferences
   });
}

export async function deleteUser(user) {
   await deleteDoc(doc(db, "users", user.uid));
}