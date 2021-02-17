import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDpTQSmr2E26KaBXQI9NFZvEkl7CxVZHR8",
  authDomain: "virtualpet1-a1bbd.firebaseapp.com",
  databaseURL: "https://virtualpet1-a1bbd.firebaseio.com",
  projectId: "virtualpet1-a1bbd",
  storageBucket: "virtualpet1-a1bbd.appspot.com",
  messagingSenderId: "62223588779",
  appId: "1:62223588779:web:f17426666a7339167286ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
