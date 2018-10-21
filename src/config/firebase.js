import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHnQWZD8HbnqY3GV3fcIXZuzCAzNGF7aY",
  authDomain: "lucio-project1.firebaseapp.com",
  databaseURL: "https://lucio-project1.firebaseio.com",
  projectId: "lucio-project1",
  storageBucket: "lucio-project1.appspot.com",
  messagingSenderId: "1032122386340"
};

const Firebase = firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default Firebase;
