import React from 'react';
import { Footer, Header, ProfileComponent } from '../../components';
import { Wrapper } from './styles';
import { Spin } from 'antd';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Wrapper>
      <div className="header-bg">
        <Header />
      </div>
      <ProfileComponent />
      <Footer />
    </Wrapper>
  );
};

export default Profile;
