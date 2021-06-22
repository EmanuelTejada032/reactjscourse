import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAKcfB2QrzvlJcSH8wGX9pEcUwv6RYZvDs",
    authDomain: "reactclothestore.firebaseapp.com",
    projectId: "reactclothestore",
    storageBucket: "reactclothestore.appspot.com",
    messagingSenderId: "617647435158",
    appId: "1:617647435158:web:5fd03c8b82ff8381be41b7",
    measurementId: "G-2X8WLQ3VP2"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
