import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBOTv0HrN3Zwn_vlRMfaazoEi7HddNN-GE",
    authDomain: "fir-chat-application-20e0e.firebaseapp.com",
    databaseURL: "https://fir-chat-application-20e0e.firebaseio.com",
    projectId: "fir-chat-application-20e0e",
    storageBucket: "fir-chat-application-20e0e.appspot.com",
    messagingSenderId: "325981668211"
  };
  firebase.initializeApp(config);
  export default firebase;