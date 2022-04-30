import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from '../components/Login/loginSlice';
import { getUsers } from '../components/Profile/profileSlice';
import { auth } from '../firebase/config';

const useAuth = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const currentUserAuth = auth.currentUser;

  const { isLogged } = useSelector((state) => state.login);
  // const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, photoURL, email, uid, accessToken } =
          auth.currentUser;
        setCurrentUser({
          name: displayName,
          avatar: photoURL,
          email,
          uid,
          address: '',
          accessToken,
        });
      }
      if (user && !isLogged) {
        dispatch(checkLogged(true));
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
    });

    return unsubscribed;
  }, [dispatch]);
  return { isLoading, currentUser, currentUserAuth };
};

export default useAuth;
