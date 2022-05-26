import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Firestore, getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkjTiQECUkHSf3rM9sqafmM-SxyjTT-uk',
  authDomain: 'students-dashboard-51542.firebaseapp.com',
  projectId: 'students-dashboard-51542',
  storageBucket: 'students-dashboard-51542.appspot.com',
  messagingSenderId: '1019192619377',
  appId: '1:1019192619377:web:207a444ee5789ef29446d0',
  measurementId: 'G-GZKTCDQHSG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();
