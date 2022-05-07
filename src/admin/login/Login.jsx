import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginComponentAdmin } from '../../admin_components';
import useAuthAdmin from '../../hooks/useAuthAdmin';

const Login = () => {
  const navigate = useNavigate();
  const { loading } = useAuthAdmin();

  const { isLogged } = useSelector((state) => state.login);

  useEffect(() => {
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, navigate]);

  if (loading) {
    return <Spin />;
  }

  return <LoginComponentAdmin />;
};

export default Login;
