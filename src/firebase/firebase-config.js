import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4R4zKUkUYDchMz05ZJ3-z96gJ8_JfC9U",
  authDomain: "cursos-react-4af3d.firebaseapp.com",
  projectId: "cursos-react-4af3d",
  storageBucket: "cursos-react-4af3d.appspot.com",
  messagingSenderId: "26172325902",
  appId: "1:26172325902:web:0eb270296a5a664efe7c5f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firestore, googleAuthProvider, firebase };
