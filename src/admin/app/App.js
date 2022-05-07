import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css';
import { HeaderAdmin, FooterAdmin, NavbarAdmin } from '../../admin_components';
import useAuthAdmin from '../../hooks/useAuthAdmin';
import { Row, Spin } from 'antd';

const App = () => {
  useEffect(() => {
    document.title = 'Admin';
  }, []);

  const { loading } = useAuthAdmin();

  if (loading) {
    return <Spin />;
  }

  return (
    <>
      <HeaderAdmin />
      <Row>
        <NavbarAdmin />
        <Outlet />
      </Row>
      <FooterAdmin />
    </>
  );
};

export default App;
