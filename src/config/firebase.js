import firebase from 'firebase'
import 'firebase/firestore';

// please insert your firebase config self
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

// export default { firebase }