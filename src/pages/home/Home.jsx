import React from 'react';
import { Button, Col, Menu, Row, Typography } from 'antd';
import Logo from '../../assets/logo/burger-king-logo.png';
import {
  EyeOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  StarFilled,
  StarOutlined,
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
      &-item {
        margin: 0;
        &-selected {
          background-color: transparent;
        }
      }
      &-title-content a {
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
        &-shopping {
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
  border: 1px solid var(--primary-color);
`;

const NewProductsWrapper = styled.div`
  margin-top: 150px;
  .title-wrapper {
    text-align: center;
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
    .ant-typography {
      font-size: 20px;
      color: var(--text-gray);
    }
  }
  .ant-col {
    .product-image-wrapper {
      height: 300px;
      width: 100%;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
    }
    .info-wrapper {
      background-color: var(--secondary-color-light);
      padding: 24px;
      .info {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        color: var(--text-primary);
      }
      .footer {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .rate {
          display: flex;
          font-size: 22px;
        }
        .icon-wrapper {
          display: flex;
          .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--white-color);
            font-size: 18px;
            cursor: pointer;
          }
          .shopping-cart {
            background-color: var(--primary-color-dark);
            margin-right: 10px;
          }
          .eye {
            background-color: var(--primary-color);
            margin-right: 10px;
          }
          .heart {
            background-color: var(--secondary-color);
          }
        }
      }
    }
  }
  .ant-btn {
    margin-top: 32px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MenuListWrapper = styled.div`
  margin-top: 150px;
  .title-wrapper {
    text-align: center;
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
    .ant-typography {
      font-size: 20px;
      color: var(--text-gray);
    }
  }
  .ant-col {
    position: relative;
    &:hover img {
      opacity: 0.3;
    }
    &:hover .middle {
      opacity: 1;
    }
    img {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
    .middle {
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      .ant-typography {
        color: var(--text-primary);
        font-size: 30px;
        margin-bottom: 10px;
        font-weight: 600;
      }
    }
  }
`;

const BlogsRecentlyWrapper = styled.div`
  margin-top: 150px;
  .title-wrapper {
    text-align: center;
    margin-bottom: 40px;
    h4.ant-typography {
      font-size: 60px;
      color: var(--text-primary);
      margin: 0;
      text-transform: uppercase;
    }
    .ant-typography {
      font-size: 20px;
      color: var(--text-gray);
    }
  }
  .ant-col {
    .blog-image-wrapper {
      height: 300px;
      width: 100%;
      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      cursor: pointer;
    }
    .info-wrapper {
      background-color: var(--secondary-color-light);
      padding: 24px;
      .title {
        font-size: 24px;
        font-weight: 600;
        color: var(--text-primary);
        display: block;
      }
      .description {
        font-size: 16px;
        color: var(--text-gray);
      }
    }
  }
  .ant-btn {
    margin-top: 32px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const FormContactWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 40px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 10px;
  }
  .description {
    font-size: 20px;
    color: var(--text-gray);
    margin-bottom: 10px;
  }
  .input-wrapper {
    position: relative;
    input {
      width: 500px;
      height: 48px;
      border: 2px solid var(--primary-color);
      border-radius: 20px;
      padding: 8px 12px;
      font-size: 18px;
    }
    .ant-btn {
      position: absolute;
      top: 0;
      right: 0;
      background-color: var(--primary-color);
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      font-size: 22px;
      font-weight: 600;
      height: 48px;
      color: var(--text-primary);
      text-align: center;
      line-height: 48px;
      padding: 0 20px;
    }
  }
`;

const FooterWrapper = styled.div`
  margin-top: 150px;
  .top {
    background-color: var(--primary-color-dark);
    padding: 32px 0;
    position: relative;
    .logo-wrapper {
      display: flex;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 160px;
      height: 160px;
      align-items: center;
      left: 40px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .ant-row {
      h4.ant-typography {
        font-size: 24px;
        color: var(--white-color);
        text-transform: uppercase;
      }
      .ant-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        & a {
          color: var(--white-color);
          font-size: 18px;
        }
      }
      .contacts {
        .title {
          font-size: 16px;
          color: var(--white-color);
        }
        .description {
          font-size: 18px;
          font-weight: 600;
          color: var(--white-color);
        }
      }
      .phone {
        .ant-typography:not(:first-child) {
          color: var(--secondary-color);
          font-size: 18px;
        }
      }
    }
  }
  .license {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    background-color: var(--primary-color);
    font-size: 18px;
    color: var(--text-primary);
  }
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
          <Row gutter={[16, 32]}>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="product-image-wrapper">
                <img src={HamburgerBanner} alt="product" />
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <Text>Gà rán</Text>
                  <Text>40.000đ</Text>
                </div>
                <div className="footer">
                  <div className="rate">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="icon-wrapper">
                    <div className="icon shopping-cart">
                      <ShoppingCartOutlined />
                    </div>
                    <Link to="products/id" className="icon eye">
                      <EyeOutlined />
                    </Link>
                    <div className="icon heart">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="product-image-wrapper">
                <img src={HamburgerBanner} alt="product" />
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <Text>Gà rán</Text>
                  <Text>40.000đ</Text>
                </div>
                <div className="footer">
                  <div className="rate">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="icon-wrapper">
                    <div className="icon shopping-cart">
                      <ShoppingCartOutlined />
                    </div>
                    <Link to="products/id" className="icon eye">
                      <EyeOutlined />
                    </Link>
                    <div className="icon heart">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="product-image-wrapper">
                <img src={HamburgerBanner} alt="product" />
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <Text>Gà rán</Text>
                  <Text>40.000đ</Text>
                </div>
                <div className="footer">
                  <div className="rate">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="icon-wrapper">
                    <div className="icon shopping-cart">
                      <ShoppingCartOutlined />
                    </div>
                    <Link to="products/id" className="icon eye">
                      <EyeOutlined />
                    </Link>
                    <div className="icon heart">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="product-image-wrapper">
                <img src={HamburgerBanner} alt="product" />
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <Text>Gà rán</Text>
                  <Text>40.000đ</Text>
                </div>
                <div className="footer">
                  <div className="rate">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="icon-wrapper">
                    <div className="icon shopping-cart">
                      <ShoppingCartOutlined />
                    </div>
                    <Link to="products/id" className="icon eye">
                      <EyeOutlined />
                    </Link>
                    <div className="icon heart">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="product-image-wrapper">
                <img src={HamburgerBanner} alt="product" />
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <Text>Gà rán</Text>
                  <Text>40.000đ</Text>
                </div>
                <div className="footer">
                  <div className="rate">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="icon-wrapper">
                    <div className="icon shopping-cart">
                      <ShoppingCartOutlined />
                    </div>
                    <Link to="products/id" className="icon eye">
                      <EyeOutlined />
                    </Link>
                    <div className="icon heart">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <div className="product-image-wrapper">
                <img src={HamburgerBanner} alt="product" />
              </div>
              <div className="info-wrapper">
                <div className="info">
                  <Text>Gà rán</Text>
                  <Text>40.000đ</Text>
                </div>
                <div className="footer">
                  <div className="rate">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                  </div>
                  <div className="icon-wrapper">
                    <div className="icon shopping-cart">
                      <ShoppingCartOutlined />
                    </div>
                    <Link to="products/id" className="icon eye">
                      <EyeOutlined />
                    </Link>
                    <div className="icon heart">
                      <HeartOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Link to="products">
          <ButtonStyled size="middle">Xem thêm</ButtonStyled>
        </Link>
      </NewProductsWrapper>

      <MenuListWrapper>
        <div className="title-wrapper">
          <Title level={4}>danh mục thực đơn</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </div>
        <div className="container">
          <Row gutter={[16, 32]}>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <img src={HamburgerBanner} alt="combo" />
              <div className="middle">
                <Text>Combo</Text>
                <Link to="products/category">
                  <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                </Link>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <img src={HamburgerBanner} alt="combo" />
              <div className="middle">
                <Text>Combo</Text>
                <Link to="products/category">
                  <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                </Link>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <img src={HamburgerBanner} alt="combo" />
              <div className="middle">
                <Text>Combo</Text>
                <Link to="products/category">
                  <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                </Link>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <img src={HamburgerBanner} alt="combo" />
              <div className="middle">
                <Text>Combo</Text>
                <Link to="products/category">
                  <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                </Link>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <img src={HamburgerBanner} alt="combo" />
              <div className="middle">
                <Text>Combo</Text>
                <Link to="products/category">
                  <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                </Link>
              </div>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <img src={HamburgerBanner} alt="combo" />
              <div className="middle">
                <Text>Combo</Text>
                <Link to="products/category">
                  <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </MenuListWrapper>

      <BlogsRecentlyWrapper>
        <div className="title-wrapper">
          <Title level={4}>bài viết gần đây</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
        </div>
        <div className="container">
          <Row gutter={[16, 32]}>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <Link to="blogs/id">
                <div className="blog-image-wrapper">
                  <img src={HamburgerBanner} alt="blog" />
                </div>
                <div className="info-wrapper">
                  <Text className="title">
                    Burger lớn phục vụ với rau cải xoăn
                  </Text>
                  <Text className="description">
                    Món ăn tuyệt vời là sự kết hợp hài hoà của burger với rau cả
                    xoăn. Hứa hẹn sẽ mang lại...
                  </Text>
                </div>
              </Link>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <Link to="blogs/id">
                <div className="blog-image-wrapper">
                  <img src={HamburgerBanner} alt="blog" />
                </div>
                <div className="info-wrapper">
                  <Text className="title">
                    Burger lớn phục vụ với rau cải xoăn
                  </Text>
                  <Text className="description">
                    Món ăn tuyệt vời là sự kết hợp hài hoà của burger với rau cả
                    xoăn. Hứa hẹn sẽ mang lại...
                  </Text>
                </div>
              </Link>
            </Col>
            <Col xl={8} lg={8} md={12} sm={24} xs={24}>
              <Link to="blogs/id">
                <div className="blog-image-wrapper">
                  <img src={HamburgerBanner} alt="blog" />
                </div>
                <div className="info-wrapper">
                  <Text className="title">
                    Burger lớn phục vụ với rau cải xoăn
                  </Text>
                  <Text className="description">
                    Món ăn tuyệt vời là sự kết hợp hài hoà của burger với rau cả
                    xoăn. Hứa hẹn sẽ mang lại...
                  </Text>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
        <Link to="blogs">
          <ButtonStyled size="middle">Xem thêm</ButtonStyled>
        </Link>
      </BlogsRecentlyWrapper>

      <FormContactWrapper>
        <Title level={4} className="title">
          Nhận thông tin về sản phẩm mới nhất
        </Title>
        <Text className="description">
          Điền email của bạn tại đây, chúng tôi sẽ gửi thông tin và báo giá
          ngày!
        </Text>
        <div className="input-wrapper">
          <input type="text" placeholder="Nhập email" />
          <Button size="small">Gửi</Button>
        </div>
      </FormContactWrapper>

      <FooterWrapper>
        <div className="top">
          <Link to="/" className="logo-wrapper">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="container">
            <Row>
              <Col xl={8} lg={8} md={12} sm={24} xs={24} className="quick-link">
                <Title level={4}>liên kết nhanh</Title>
                <Link to="products">Thực đơn</Link>
                <Link to="">Đặt hàng nhanh</Link>
                <Link to="">Phương thức thanh toán</Link>
                <Link to="contact">Liên hệ</Link>
              </Col>
              <Col xl={8} lg={8} md={12} sm={24} xs={24} className="contacts">
                <Title level={4}>những liên hệ</Title>
                <Text className="title">Thời gian làm việc</Text>
                <Text className="description">
                  Từ thứ 2 đến chủ nhật 7:00 - 21:00
                </Text>
                <Text className="title">Địa chỉ</Text>
                <Text className="description">
                  Ngõ 66, Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                </Text>
              </Col>
              <Col xl={8} lg={8} md={12} sm={24} xs={24} className="phone">
                <Title level={4}>điện thoại</Title>
                <Text>+84361234567</Text>
                <Text>+84348735326</Text>
              </Col>
            </Row>
          </div>
        </div>
        <div className="license">
          © {new Date().getFullYear()} Burger King. Tất cả đã được đăng ký bản
          quyền
        </div>
      </FooterWrapper>
    </>
  );
}
