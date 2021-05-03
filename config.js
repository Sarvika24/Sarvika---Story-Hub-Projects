import firebase from 'firebase';
require('@firebase/firestore')



var firebaseConfig = {
  apiKey: "AIzaSyA21-GxV8_H-mNaIPtr6gSy8bsuIkyLGV8",
  authDomain: "bartersystem-530a9.firebaseapp.com",
  projectId: "bartersystem-530a9",
  storageBucket: "bartersystem-530a9.appspot.com",
  messagingSenderId: "260655171395",
  appId: "1:260655171395:web:995406488110700d3191f6"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
