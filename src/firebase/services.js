import {
  serverTimestamp,
  addDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from './config';

export const addDocument = async (collectionProp, data) => {
  await addDoc(collection(db, collectionProp), {
    ...data,
    createdAt: serverTimestamp(),
  });
};

export const getCollection = async (collectionName, condition) => {
  let collectionRef = collection(db, collectionName);
  if (condition) {
    if (!condition.compareValue || !condition.compareValue.length) {
      return [];
    }

    collectionRef = query(
      collectionRef,
      where(condition.fieldName, condition.operator, condition.compareValue)
    );
  }

  let result = [];
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });
  return result;
};
