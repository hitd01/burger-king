import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo/burger-king-logo.png';
import { Link } from 'react-router-dom';
import {
  BarsOutlined,
  CloseOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Input, Menu, Spin } from 'antd';
import { HeaderWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenLogin } from '../Login/loginSlice';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const dispatch = useDispatch();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const { loading } = useSelector((state) => state.users);
  const { isLogged } = useSelector((state) => state.login);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');

  const { currentUserAuth } = useAuth();
  useEffect(() => {
    if (isLogged) {
      const { photoURL, displayName, email } = currentUserAuth;
      setName(displayName);
      setAvatar(photoURL);
      setEmail(email);
    }
  }, [isLogged]);

  if (loading === 'pending') {
    return <Spin />;
  }

  return (
    <HeaderWrapper toggleMenu={toggleMenu} search={isSearch}>
      <Link to="/" className="logo-wrapper">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="link-wrapper">
        <Menu>
          <Menu.Item key="home">
            <Link to="/">TRANG CHỦ</Link>
          </Menu.Item>
          <Menu.Item key="whatBK">
            <Link to="/about">VỀ CHÚNG TÔI</Link>
          </Menu.Item>
          <Menu.Item key="menu">
            <Link to="/products">THỰC ĐƠN</Link>
          </Menu.Item>
          <Menu.Item key="blog">
            <Link to="/blogs">BÀI VIẾT</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">LIÊN HỆ</Link>
          </Menu.Item>
        </Menu>
        <div className="icon-wrapper">
          <Link className="cart-wrapper icon" to="/cart">
            <ShoppingOutlined />
            <span className="quantity">0</span>
          </Link>
          <div className="search-wrapper">
            <SearchOutlined
              className="icon"
              onClick={() => setIsSearch(!isSearch)}
            />
            {isSearch ? <Input placeholder="Nhập tên món ăn" /> : null}
          </div>

          {isLogged ? (
            <Link to="/profile" className="user-avatar">
              <Avatar size="large" src={avatar}>
                {avatar
                  ? ''
                  : name
                  ? name?.charAt(0)?.toUpperCase()
                  : email?.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
          ) : (
            <Link
              to="/login"
              className="icon"
              onClick={() => dispatch(toggleHiddenLogin(false))}
            >
              <UserOutlined />
            </Link>
          )}

          {toggleMenu ? (
            <CloseOutlined
              className="icon"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          ) : (
            <BarsOutlined
              className="icon"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
