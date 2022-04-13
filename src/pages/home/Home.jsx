import React, { useState } from 'react';
import { Button, Col, Menu, Row, Typography } from 'antd';
import Logo from '../../assets/logo/burger-king-logo.png';
import {
  BarsOutlined,
  CloseOutlined,
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
import { Link } from 'react-router-dom';
import HamburgerBanner from '../../assets/images/hamburger-banner.jpg';
import {
  Wrapper,
  NewProductsWrapper,
  BlogsRecentlyWrapper,
  MenuListWrapper,
  FormContactWrapper,
  FooterWrapper,
  Header,
  ButtonStyled,
} from './styles';

const { Paragraph, Title, Text } = Typography;

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <Wrapper>
        {/* header */}
        <Header toggleMenu={toggleMenu}>
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
              <Link className="cart-wrapper" to="cart">
                <ShoppingOutlined />
                <span className="quantity">0</span>
              </Link>
              <SearchOutlined />
              <Link to="login">
                <UserOutlined />
              </Link>
              {toggleMenu ? (
                <CloseOutlined onClick={() => setToggleMenu(!toggleMenu)} />
              ) : (
                <BarsOutlined onClick={() => setToggleMenu(!toggleMenu)} />
              )}
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

      <NewProductsWrapper className="container">
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

      <MenuListWrapper className="container">
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

      <BlogsRecentlyWrapper className="container">
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

      <FormContactWrapper className="container">
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
            <Row gutter={[16, 32]}>
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
