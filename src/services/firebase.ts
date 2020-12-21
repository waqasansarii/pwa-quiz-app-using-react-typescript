import  firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAuYXcMwmDF73lSbYcNJe9CAuUtP-heblQ",
    authDomain: "notificationquiz-dcca3.firebaseapp.com",
    projectId: "notificationquiz-dcca3",
    storageBucket: "notificationquiz-dcca3.appspot.com",
    messagingSenderId: "809202598309",
    appId: "1:809202598309:web:c3fbcd35011124e48f684c",
    measurementId: "G-RJLCB55V1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;