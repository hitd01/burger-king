import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';

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
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };
