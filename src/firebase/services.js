import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { db } from './config';

export const addDocument = async (collectionProp, data) => {
  await addDoc(collection(db, collectionProp), {
    ...data,
    createdAt: serverTimestamp(),
  });
};
