import React from 'react';
import { Button, Col, Menu, Row, Typography } from 'antd';
import Logo from '../../assets/logo/burger-king-logo.png';
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerBanner from '../../assets/images/hamburger-banner.jpg';

const { Paragraph, Title, Text } = Typography;

const Wrapper = styled.div`
  background: url(${HamburgerBanner}) no-repeat center;
  background-size: cover;
  height: 100vh;
  position: relative;
  .banner {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    padding: 0 40px;
    .content-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .title {
        text-transform: uppercase;
        font-size: 80px;
        font-weight: bold;
        margin-bottom: 15px;
        color: var(--white-color);
      }
      .content {
        max-width: 800px;
        text-align: center;
        margin-bottom: 15px;
        font-size: 22px;
        color: var(--white-color);
      }
    }
    .anticon {
      font-size: 30px;
      color: var(--white-color);
      cursor: pointer;
      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  height: 110px;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 80px;
    img {
      max-width: 100%;
    }
  }
  .link-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white-color);
    .ant-menu {
      border: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: transparent;
      .ant-menu-item {
        margin: 0;
        .ant-menu-title-content a {
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
          text-align: center;
          color: var(--white-color);
          &:hover {
            color: var(--primary-color);
          }
        }
      }
      .ant-menu-item-selected {
        background-color: transparent;
      }
    }

    .icon-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cart-wrapper {
        position: relative;
        color: var(--secondary-color);
        .quantity {
          position: absolute;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: var(--secondary-color-light);
          font-size: 14px;
          top: -5px;
          right: 5px;
          text-align: center;
          line-height: 25px;
        }
      }
      .anticon {
        padding: 0 16px;
        font-size: 30px;
        color: var(--white-color);
        &.anticon-shopping {
          color: var(--secondary-color);
        }
      }
    }
  }
`;

const ButtonStyled = styled(Button)`
  font-size: 20px;
  height: 60px;
  padding: 0 60px;
  line-height: 60px;
  font-weight: bold;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
`;

const NewProductsWrapper = styled.div`
  max-width: var(--container-max-widths);
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        {/* header */}
        <Header>
          <Link to="/" className="logo">
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
              <Link className="cart-wrapper" to="cart">
                <ShoppingOutlined />
                <span className="quantity">0</span>
              </Link>
              <SearchOutlined />
              <Link to="login">
                <UserOutlined />
              </Link>
            </div>
          </div>
        </Header>

        {/* banner */}
        <div className="banner">
          <LeftOutlined />
          <div className="content-wrapper">
            <Title level={1} className="title">
              BEST BURGERS
            </Title>
            <Paragraph className="content">
              Quisque nec libero ut sapien dictum commodo. Nam ac felis id
              libero rutrum pharetra eu non lacus. Etiam maximus euismod ex, ac
              suscipit lacus egestas in. Aenean ac tortor ut lacus ultrices
              mollis.
            </Paragraph>
            <ButtonStyled size="middle" className="btn-view-more">
              Xem thêm
            </ButtonStyled>
          </div>
          <RightOutlined />
        </div>
      </Wrapper>

      <NewProductsWrapper>
        <div className="title-wrapper">
          <Title level={4}>món mới</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </div>
        <div className="container">
          <Row gutter={16} className="new-products">
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              abc
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              abc
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              abc
            </Col>
          </Row>
        </div>
      </NewProductsWrapper>
    </>
  );
}
