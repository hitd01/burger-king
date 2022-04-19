import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBe4_VJmk6vrfn_tWzj2_INUFH6I2__PKg',
  authDomain: 'food-store-ft.firebaseapp.com',
  projectId: 'food-store-ft',
  storageBucket: 'food-store-ft.appspot.com',
  messagingSenderId: '693520254440',
  appId: '1:693520254440:web:3df2e644365e86a862105d',
  measurementId: 'G-9KFGRDQNYR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

connectFirestoreEmulator(db, 'localhost', 8080);
connectAuthEmulator(auth, 'http://localhost:9099');

export { db, auth };
