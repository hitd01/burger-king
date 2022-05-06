import React, { useEffect } from 'react';
import { Button, Col, Row, Typography, Image } from 'antd';
import {
  EyeOutlined,
  HeartOutlined,
  LeftOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import HamburgerBanner from '../../assets/images/hamburger-banner.jpg';
import {
  BannerWrapper,
  NewProductsWrapper,
  BlogsRecentlyWrapper,
  MenuListWrapper,
  FormContactWrapper,
  ButtonStyled,
} from './styles';

const { Paragraph, Title, Text } = Typography;

const Home = () => {
  useEffect(() => {
    document.title = 'Trang chủ';
  });

  const productCountTest = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <BannerWrapper>
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
      </BannerWrapper>

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
            {productCountTest.map((item) => (
              <Col key={item} xl={8} lg={8} md={12} sm={24} xs={24}>
                <Image
                  src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/product1b.png"
                  width="100%"
                  height="300px"
                />
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
                      <Link to="/products/idProduct" className="icon eye">
                        <EyeOutlined />
                      </Link>
                      <div className="icon heart">
                        <HeartOutlined />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
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
    </>
  );
};

export default Home;
