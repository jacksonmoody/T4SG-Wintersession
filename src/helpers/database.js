import { db } from './firebase';
import { setDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { debugErrorMap } from 'firebase/auth';

export async function addUser(uid, name, authProvider, email, onboarded = false, description = "", image = "", preferences = [1,2,3],
 clubs = [], gender = "", numBlockmates = 0, intendedConcentrations = [], cleanlinessLevel = 0, sleepTime = 0, hobbies = [], roomLoudness = 0, 
 lookingForGroup = false, dorm = "", typeOfPerson = "") {
   await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: name,
      authProvider: authProvider,
      onboarded: onboarded,
      email: email,
      description: description,
      image: image,
      preferences: preferences,
      clubs: clubs,
      gender: gender, 
      numBlockmates: numBlockmates,
      intendedConcentrations: intendedConcentrations,
      clealinessLevel: cleanlinessLevel,
      sleepTime: sleepTime,
      hobbies: hobbies,
      roomLoudness: roomLoudness,
      lookingForGroup: lookingForGroup,
      dorm: dorm,
      typeOfPerson: typeOfPerson
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
      preferences: user.preferences,
      clubs: user.clubs,
      gender: user.gender,
      numBlockmates: user.numBlockmates,
      intendedConcentrations: user.intendedConcentrations,
      cleanlinessLevel: user.cleanlinessLevel,
      sleepTime: user.sleepTime, 
      hobbies: user.hobbies,
      roomLoudness: user.roomLoudness,
      lookingForGroup: user.lookingForGroup,
      dorm: user.dorm,
      typeOfPerson: user.typeOfPerson
   });
}

export async function deleteUser(user) {
   await deleteDoc(doc(db, "users", user.uid));
}