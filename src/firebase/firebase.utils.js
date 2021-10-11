import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyDtV8KvKFyJc_SogktGpj9FWLS-vbOyPRU',
  authDomain: 'crwn-db-66f43.firebaseapp.com',
  projectId: 'crwn-db-66f43',
  storageBucket: 'crwn-db-66f43.appspot.com',
  messagingSenderId: '218009694195',
  appId: '1:218009694195:web:34174b0bd25f607f092c86',
  measurementId: 'G-2350YEKETE',
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
