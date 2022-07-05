import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAE8E9jqLXsGh4rDwxpM78VuCB5gSG6bmA',
  authDomain: 'sukma-app-a5a73.firebaseapp.com',
  databaseURL: 'https://sukma-app-a5a73-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'sukma-app-a5a73',
  storageBucket: 'sukma-app-a5a73.appspot.com',
  messagingSenderId: '272093168250',
  appId: '1:272093168250:web:7159fb00da239eaf4bf1c3'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const dbStore = getFirestore(firebaseApp);
const auth = firebase.auth();
const dbLive = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

export { dbStore, dbLive, auth, storage };
