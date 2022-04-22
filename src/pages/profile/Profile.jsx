import React from 'react';
import { Footer, Header, ProfileComponent } from '../../components';
import { Wrapper } from './styles';
import useLoading from '../../hooks/useLoading';
import { Spin } from 'antd';

const Profile = () => {
  const isLoading = useLoading();

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <Wrapper>
          <div className="header-bg">
            <Header />
          </div>
          <ProfileComponent />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default Profile;
