import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQPfN4mML-P23M0M1KtXTF6jOs1GjR4g8",
  authDomain: "crwn-clothing-db-2dc3c.firebaseapp.com",
  projectId: "crwn-clothing-db-2dc3c",
  storageBucket: "crwn-clothing-db-2dc3c.appspot.com",
  messagingSenderId: "750742732573",
  appId: "1:750742732573:web:2e700bf3fac3d8b1562bf4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// We can create multiple providers for different things during the application's life cycle.
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // takes 3 arguments: database, collection, identifier (i.e. a primary key / uniq id)
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};
