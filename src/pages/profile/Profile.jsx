import React from 'react';
import { Footer, Header, ProfileComponent } from '../../components';
import { Wrapper } from './styles';
import { Spin } from 'antd';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { isLoading } = useAuth();

  return (
    <>
      {!isLoading ? (
        <Wrapper>
          <div className="header-bg">
            <Header />
          </div>
          <ProfileComponent />
          <Footer />
        </Wrapper>
      ) : (
        <Spin />
      )}
    </>
  );
};

export default Profile;
