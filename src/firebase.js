  import firebase from "firebase";
  
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCs1iEWc8Xs5n-ihPSmaSYeu3bor99MF0A",
    authDomain: "todoapp-e661f.firebaseapp.com",
    projectId: "todoapp-e661f",
    storageBucket: "todoapp-e661f.appspot.com",
    messagingSenderId: "399082204856",
    appId: "1:399082204856:web:574d0745e504c6105f4e4d",
    measurementId: "G-48L2KZGCYZ"
});
    
  const db = firebaseApp.firestore();

  export default db;