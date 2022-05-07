import React, { useState } from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import {
  AreaChartOutlined,
  CoffeeOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  IdcardOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

const Navbar = () => {
  const { collapsed } = useSelector((state) => state.adminNavbar);

  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };
  const [pageCurrent, setPageCurrent] = useState('analytics');
  const navItems = [
    getItem(
      <Link to="/app/admin">Thống kê</Link>,
      'analytics',
      <AreaChartOutlined />
    ),
    getItem(
      <Link to="/app/admin/users">Người dùng</Link>,
      'users',
      <IdcardOutlined />
    ),
    getItem(
      <Link to="/app/admin/products">Món ăn</Link>,
      'products',
      <CoffeeOutlined />
    ),
    getItem(
      <Link to="/app/admin/product-reviews">Đánh giá món ăn</Link>,
      'product-reviews',
      <FileDoneOutlined />
    ),
    getItem(
      <Link to="/app/admin/blogs">Bài viết</Link>,
      'blogs',
      <FileTextOutlined />
    ),
    getItem(
      <Link to="/app/admin/blog-reviews">Đánh giá bài viết</Link>,
      'blog-reviews',
      <FileDoneOutlined />
    ),
    getItem(
      <Link to="/app/admin/cart">Đơn hàng</Link>,
      'cart',
      <ShoppingOutlined />
    ),
  ];
  const menuClick = (e) => {
    setPageCurrent(e.key);
  };

  return (
    <Wrapper>
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        items={navItems}
        selectedKeys={[pageCurrent]}
        onClick={menuClick}
      />
    </Wrapper>
  );
};

export default Navbar;
