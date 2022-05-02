import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkLogged } from '../components/Login/loginSlice';
import { auth } from '../firebase/config';

const useAuth = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const currentUserAuth = auth.currentUser;

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(checkLogged(true));
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    });

    return unsubscribed;
  }, [dispatch]);

  return { isLoading, currentUserAuth };
};

export default useAuth;
