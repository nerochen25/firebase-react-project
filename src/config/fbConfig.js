import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCysc3VVM8NgDDT0r5d5OHLL1AtT-wlyBo",
    authDomain: "neroplan-e68a3.firebaseapp.com",
    databaseURL: "https://neroplan-e68a3.firebaseio.com",
    projectId: "neroplan-e68a3",
    storageBucket: "neroplan-e68a3.appspot.com",
    messagingSenderId: "233283916811",
    appId: "1:233283916811:web:2bdbd4d9cd3405eae6a30e",
    measurementId: "G-8W2PE20NWP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;