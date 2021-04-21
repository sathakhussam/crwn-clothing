import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBugjnVe1CCDBv1QE9kVkrtoHFUx6ufGhs",
    authDomain: "crwn-clothing-uzham.firebaseapp.com",
    projectId: "crwn-clothing-uzham",
    storageBucket: "crwn-clothing-uzham.appspot.com",
    messagingSenderId: "321443501834",
    appId: "1:321443501834:web:2ae02718f3c982de74ccf3",
    measurementId: "G-H6N1D5XV6W"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;