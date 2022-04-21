import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from '../components/Login/loginSlice';
import { auth } from '../firebase/config';

const useLoading = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const { isLogged } = useSelector((state) => state.login);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user && !isLogged) {
        setIsLoading(false);
        dispatch(checkLogged(true));
        return;
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribed();
    };
  }, []);

  return isLoading;
};

export default useLoading;
