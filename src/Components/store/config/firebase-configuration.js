import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCbF4zzutpKZkuSna2Q22LSSR1_NbrUCPU',
  authDomain: 'smart-shed-bf283.firebaseapp.com',
  databaseURL: 'https://smart-shed-bf283-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'smart-shed-bf283',
  storageBucket: 'smart-shed-bf283.appspot.com',
  messagingSenderId: '756641904302',
  appId: '1:756641904302:web:6a9d7c7ce65e2a33cfa2a5',
  measurementId: "G-LT5006X1ZM",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
export default firebase;


// import firebase from 'firebase/app';
// import 'firebase/database';

// const firebaseConfig = {
  // apiKey: 'AIzaSyCbF4zzutpKZkuSna2Q22LSSR1_NbrUCPU',
  // authDomain: 'smart-shed-bf283.firebaseapp.com',
  // databaseURL: 'https://smart-shed-bf283-default-rtdb.asia-southeast1.firebasedatabase.app',
  // projectId: 'smart-shed-bf283',
  // storageBucket: 'smart-shed-bf283.appspot.com',
  // messagingSenderId: '756641904302',
  // appId: '1:756641904302:web:6a9d7c7ce65e2a33cfa2a5',
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Access the Firebase Realtime Database
// const database = firebase.database();

// export default database;
