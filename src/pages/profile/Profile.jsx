import React from 'react';
import { Header, ProfileComponent } from '../../components';
import { Wrapper } from './styles';

const Profile = () => {
  return (
    <Wrapper>
      <Header />
      <ProfileComponent />
    </Wrapper>
  );
};

export default Profile;
