import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

export const appFirebase = firebase.initializeApp({
  apiKey: 'AIzaSyBDcupbw0m81Sn85T9Ca3jwpHM4jcp_XU4',
  authDomain: 'portafolio-db8bc.firebaseapp.com',
  projectId: 'portafolio-db8bc',
  storageBucket: 'portafolio-db8bc.appspot.com',
  messagingSenderId: '164154891271',
  appId: '1:164154891271:web:66ba917f24511b6e531ea2',
});
