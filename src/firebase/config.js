import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF9ztVZBVTW4hfRxeUq40orhxlMNfuxUY",
  authDomain: "vue-blog-784c0.firebaseapp.com",
  projectId: "vue-blog-784c0",
  storageBucket: "vue-blog-784c0.appspot.com",
  messagingSenderId: "444743008996",
  appId: "1:444743008996:web:66d035e01f0f88eb6fa2f1",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };
