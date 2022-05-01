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
  const { displayName, photoURL, email } = currentUserAuth;

  const { loading } = useSelector((state) => state.users);
  const { providerId } = useSelector((state) => state.login);

  const [profileSelected, setProfileSelected] = useState(true);
  const [changePasswordSelected, setChangePasswordSelected] = useState(false);
  const [shoppingHistorySelected, setShoppingHistorySelected] = useState(false);

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

  const handleProfileClick = () => {
    setProfileSelected(true);
    setChangePasswordSelected(false);
    setShoppingHistorySelected(false);
  };
  const handleChangePasswordClick = () => {
    setProfileSelected(false);
    setChangePasswordSelected(true);
    setShoppingHistorySelected(false);
  };
  const handleShoppingHistoryClick = () => {
    setProfileSelected(false);
    setChangePasswordSelected(false);
    setShoppingHistorySelected(true);
  };

  if (loading === 'pending') {
    return <Spin />;
  }

  return (
    <Wrapper
      profileSelected={profileSelected}
      changePasswordSelected={changePasswordSelected}
    >
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
              <div className="edit-wrapper" onClick={handleProfileClick}>
                <EditOutlined />
                Sửa hồ sơ
              </div>
            </div>
          </div>

          <div className="profile">
            <div className="title" onClick={handleProfileClick}>
              <UserOutlined />
              <Text>Tài khoản của tôi</Text>
            </div>
            <Menu>
              <Menu.Item key="profile" onClick={handleProfileClick}>
                <Text className="profile-info">Hồ sơ</Text>
              </Menu.Item>
              {providerId === 'password' ? (
                <Menu.Item
                  key="change-password"
                  onClick={handleChangePasswordClick}
                >
                  <Text className="change-password-title">Đổi mật khẩu</Text>
                </Menu.Item>
              ) : null}
            </Menu>
          </div>
          <div
            className="shopping-history"
            onClick={handleShoppingHistoryClick}
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
          {profileSelected ? <EditProfile /> : null}
          {changePasswordSelected ? <ChangePassword /> : null}
          {shoppingHistorySelected ? <ShoppingHistory /> : null}
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Profile;
