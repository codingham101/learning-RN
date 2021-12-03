import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDACTcM1K4n06vTyGIBDfnO04GnU1gbEOw",
    authDomain: "tryerror-fcf9e.firebaseapp.com",
    databaseURL: "https://tryerror-fcf9e-default-rtdb.firebaseio.com",
    projectId: "tryerror-fcf9e",
    storageBucket: "tryerror-fcf9e.appspot.com",
    messagingSenderId: "108813886264",
    appId: "1:108813886264:web:457b91cdcd89066c3097cd",
    measurementId: "G-YCQT6GBXPQ"
  };
  // Initialize Firebase


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
      firebase.app()
  }

  export default firebase;