import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { db } from './config';

export const addDocument = (collectionProp, data) => {
  addDoc(collection(db, collectionProp), {
    ...data,
    createdAt: serverTimestamp(),
  });
};
