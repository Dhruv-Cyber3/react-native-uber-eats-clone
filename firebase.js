import firebase from "firebase";
const 
console.ignoredYellowBox = ["Setting a timer"];

const firebaseConfig = {
  apiKey: "AIzaSyCKjYCGT1uN9ftl2MV0beu6ifmwmp8yT",
  authDomain: "react-native-uber-eats-c-886f4.firebaseapp.com",
  projectId: "react-native-uber-eats-c-886f4",
  storageBucket: "react-native-uber-eats-c-886f4.appspot.com",
  messagingSenderId: "10099104283",
  appId: "1:1009910428367:web:529ca3e6614b0df",
  endAPI="iU676afbdba",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
