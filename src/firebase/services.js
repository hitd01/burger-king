import {
  serverTimestamp,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { auth, db, storage } from './config';

export const addDocument = async (collectionName, data) => {
  await addDoc(collection(db, collectionName), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: null,
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

export const uploadAvatar = async (file) => {
  const currentUser = auth.currentUser;
  const storageRef = ref(
    storage,
    `user-avatars/${currentUser.uid}.${
      file.type === 'image/png' ? 'png' : 'jpg'
    }`
  );
  await uploadBytes(storageRef, file);
  const photoURL = await getDownloadURL(storageRef);
  updateProfile(currentUser, { photoURL });
};

export const getADoc = async (collectionName, docId) => {
  const docRef = doc(db, collectionName, docId);
  return await getDoc(docRef);
};
