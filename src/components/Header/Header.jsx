import React, { useState } from 'react';
import Logo from '../../assets/logo/burger-king-logo.png';
import { Link } from 'react-router-dom';
import {
  BarsOutlined,
  CloseOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input, Menu } from 'antd';
import { HeaderWrapper } from './styles';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

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
            <Link to="about">VỀ CHÚNG TÔI</Link>
          </Menu.Item>
          <Menu.Item key="menu">
            <Link to="products">THỰC ĐƠN</Link>
          </Menu.Item>
          <Menu.Item key="blog">
            <Link to="blogs">BÀI VIẾT</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="contact">LIÊN HỆ</Link>
          </Menu.Item>
        </Menu>
        <div className="icon-wrapper">
          <Link className="cart-wrapper icon" to="cart">
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
          <Link to="login" className="icon">
            <UserOutlined />
          </Link>
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
