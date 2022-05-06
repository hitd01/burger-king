import {
  EditOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Col, Menu, Row, Typography, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import { Wrapper } from './styles';
import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogged } from '../Login/loginSlice';
import { getUsers } from '../Profile/profileSlice';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import EditProfile from './EditProfile/EditProfile';
import ChangePassword from './ChangePassword/ChangePassword';
import ShoppingHistory from './ShoppingHistory/ShoppingHistory';

const { Text } = Typography;

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { currentUserAuth } = useAuth();
  const { displayName, photoURL, email, uid } = currentUserAuth;

  const { loading, users } = useSelector((state) => state.users);
  const { isLogged } = useSelector((state) => state.login);

  const [selected, setSelected] = useState('profile');
  const [providerId, setProviderId] = useState(null);

  useEffect(() => {
    if (isLogged && loading === 'success') {
      const currentUser = users.find((user) => user.uid === uid);
      setProviderId(currentUser.providerId);
    }

    // return () => {
    //   if (isLogged && loading === 'success') {
    //     const currentUser = users.find((user) => user.uid === uid);
    //     setProviderId(currentUser.providerId);
    //   }
    // };
  }, [isLogged, loading, uid, users]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(checkLogged(false));
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading === 'pending') {
    return <Spin />;
  }

  return (
    <Wrapper selected={selected}>
      <Row>
        <Col className="sidebar">
          <div className="top">
            <Avatar size="large" src={photoURL}>
              {photoURL
                ? ''
                : displayName
                ? displayName?.charAt(0)?.toUpperCase()
                : email?.charAt(0).toUpperCase()}
            </Avatar>
            <div className="name-wrapper">
              <Text>
                {displayName ? displayName : email?.charAt(0).toUpperCase()}
              </Text>
              <div
                className="edit-wrapper"
                onClick={() => setSelected('profile')}
              >
                <EditOutlined />
                Sửa hồ sơ
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="title" onClick={() => setSelected('profile')}>
              <UserOutlined />
              <Text>Tài khoản của tôi</Text>
            </div>
            <Menu>
              <Menu.Item key="profile" onClick={() => setSelected('profile')}>
                <Text className="profile-info">Hồ sơ</Text>
              </Menu.Item>
              {providerId === 'password' ? (
                <Menu.Item
                  key="change-password"
                  onClick={() => setSelected('change-password')}
                >
                  <Text className="change-password-title">Đổi mật khẩu</Text>
                </Menu.Item>
              ) : null}
            </Menu>
          </div>
          <div
            className="shopping-history"
            onClick={() => setSelected('shopping-history')}
          >
            <ShoppingOutlined />
            <Text>Đơn mua</Text>
          </div>
          <div className="logout" onClick={handleLogout}>
            <LogoutOutlined />
            <Text>Đăng xuất</Text>
          </div>
        </Col>

        <Col className="content">
          {(selected === 'profile' && <EditProfile />) ||
            (selected === 'change-password' && <ChangePassword />) ||
            (selected === 'shopping-history' && <ShoppingHistory />)}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Profile;
