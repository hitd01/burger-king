import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { db } from './config';

export const addDocument = async (collectionProp, data) => {
  const storeRef = collection(db, collectionProp);
  await addDoc(storeRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
};
