import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCf0-jsBTHq7OSVc8742cp_xgIunBGKoj0',
  authDomain: 'jagodakubicka-9e63b.firebaseapp.com',
  projectId: 'jagodakubicka-9e63b',
  storageBucket: 'jagodakubicka-9e63b.appspot.com',
  messagingSenderId: '624979920187',
  appId: '1:624979920187:web:82bfa7cbaa6e5dcd11a31e',
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
