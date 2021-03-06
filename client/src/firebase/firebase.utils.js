import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import config from '@app/firebase/config';

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoolge = () => auth.signInWithPopup(provider);

export default firebase;
