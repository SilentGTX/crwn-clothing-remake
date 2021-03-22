import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBWhZ7eh3-Nl7hbMYsvxUVl9a9l4t_LqcY",
  authDomain: "crwn-clothing-database-cbea3.firebaseapp.com",
  projectId: "crwn-clothing-database-cbea3",
  storageBucket: "crwn-clothing-database-cbea3.appspot.com",
  messagingSenderId: "779457498778",
  appId: "1:779457498778:web:0ce0d8065bf3ffb3c3d923",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
