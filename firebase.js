import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDnFZmSu3QQFKRxRi1I2fP00sOkuXkQJTg",
    authDomain: "facebook-2-yt-1d394.firebaseapp.com",
    projectId: "facebook-2-yt-1d394",
    storageBucket: "facebook-2-yt-1d394.appspot.com",
    messagingSenderId: "116551130346",
    appId: "1:116551130346:web:df3920d96b013149ca0b93"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app() ;

  const db = app.firestore();
  const storage = firebase.storage();

  export { db , storage } ;