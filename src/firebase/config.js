import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBzwTyBewwf-PWF1ygYfjopUV5JzDy5T-k',
  authDomain: 'burger-king-e997d.firebaseapp.com',
  projectId: 'burger-king-e997d',
  storageBucket: 'burger-king-e997d.appspot.com',
  messagingSenderId: '124004559510',
  appId: '1:124004559510:web:ac7db761f6f107f1c370b7',
  measurementId: 'G-Y69WPHWQDW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

connectFirestoreEmulator(db, 'localhost', 8080);
connectAuthEmulator(auth, 'http://localhost:9099');
connectStorageEmulator(storage, 'localhost', 9199);

export { db, auth, storage };
