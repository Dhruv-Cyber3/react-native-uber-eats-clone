import firebase from "firebase";

console.ignoredYellowBox = ["Setting a timer"];

const firebaseConfig = {
  apiKey: "AIzaSyCKjYCGT1uN9ftl2MV0beu6ifmwmp8yTiU",
  authDomain: "react-native-uber-eats-c-886f4.firebaseapp.com",
  projectId: "react-native-uber-eats-c-886f4",
  storageBucket: "react-native-uber-eats-c-886f4.appspot.com",
  messagingSenderId: "1009910428367",
  appId: "1:1009910428367:web:529ca3e6614b0df6afbdba",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
