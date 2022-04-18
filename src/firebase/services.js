import { serverTimestamp, setDoc } from 'firebase/firestore/lite';
import { db } from './config';

export const addDocument = async (collection, data) => {
  await setDoc(collection, {
    ...data,
    createdAt: serverTimestamp(),
  });
};
