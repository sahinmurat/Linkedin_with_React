import firebase from 'firebase'; 

const firebaseConfig = {
  apiKey: "AIzaSyD8OJdWjAjukLf--3Rn4oFZ40LTraic0C4",
  authDomain: "linkedin-efedb.firebaseapp.com",
  projectId: "linkedin-efedb",
  storageBucket: "linkedin-efedb.appspot.com",
  messagingSenderId: "890879272337",
  appId: "1:890879272337:web:74aa083b3ab31e06a72630"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };