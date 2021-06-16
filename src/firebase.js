import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCzOG-8ilX_7MKSKTLz25aQfDGCv4U4vVw",
    authDomain: "warehouse-inventory-5cc16.firebaseapp.com",
    projectId: "warehouse-inventory-5cc16",
    storageBucket: "warehouse-inventory-5cc16.appspot.com",
    messagingSenderId: "193480683217",
    appId: "1:193480683217:web:d62467003a82839feadff0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };
export default db;