import React from 'react';
import { Footer, Header } from '../../components';
import { Col, Row, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Broduct1b from '../../assets/images/product1b.png';
import Product2b from '../../assets/images/product2b.png';
import Product3b from '../../assets/images/product3b.png';
import Product7 from '../../assets/images/product7.png';
import Product8 from '../../assets/images/product8.png';
import Product9a from '../../assets/images/product9a.png';
import Product9b from '../../assets/images/product9b.png';
import Product10 from '../../assets/images/product10.png';
import Product11 from '../../assets/images/product11.png';
import {
  BannerWrapper,
  NewProductsWrapper,
  BlogsRecentlyWrapper,
  ButtonStyled,
  ButtonStyled1,
} from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import useAuth from '../../hooks/useAuth';

const { Paragraph, Title, Text } = Typography;

const Shop = () => {
  const { isLoading } = useAuth();

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <BannerWrapper>
            <Header />
            <div className="banner">
              <LeftOutlined />
              <div className="content-wrapper">
                <div className="home-shop">
                  <Link to="/">Home</Link>
                  <Link to="/about"> / Shop</Link>
                </div>
                <Title level={1} className="title">
                  Thực đơn của chúng tôi
                </Title>
                <Paragraph className="content">
                  Diam ut venenatis tellus in metus vulputate eu. Placerat in
                  egestas erat imperdiet. Velit euismod in pellentesque massa
                  placerat duis ultricies lacus sed.
                </Paragraph>
              </div>
              <RightOutlined />
            </div>
          </BannerWrapper>
          <NewProductsWrapper className="container">
            <div className="container">
              <Row gutter={[16, 32]}>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="title-banner">
                    <button className="sale">Sale</button>
                    <h1>
                      <b>-30%</b>
                    </h1>
                    <span>
                      <b>
                        In quis justo vehicula, cursus arcu quis, scelerisque
                        mauris. In porta leo eget nisi lobortis lobortis.
                      </b>
                    </span>
                    <ButtonStyled size="middle">Buy now</ButtonStyled>
                  </div>
                </Col>
              </Row>
            </div>
          </NewProductsWrapper>
          <BlogsRecentlyWrapper className="container">
            <div className="title-wrapper">
              <Title level={4}>BURGERS</Title>
            </div>
            <div className="container">
              <Row gutter={[16, 32]}>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Broduct1b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">The Firehouse</Text>
                    <Text className="description">$26</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product2b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Griled Burger</Text>
                    <Text className="description">$16</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product3b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Giant Burger</Text>
                    <Text className="description">$37</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Broduct1b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">The Firehouse</Text>
                    <Text className="description">$26</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product2b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Griled Burger</Text>
                    <Text className="description">$16</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product3b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Giant Burger</Text>
                    <Text className="description">$37</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
              </Row>
            </div>
          </BlogsRecentlyWrapper>
          <BlogsRecentlyWrapper className="container">
            <div className="title-wrapper">
              <Title level={4}>BURITOS</Title>
            </div>
            <div className="container">
              <Row gutter={[16, 32]}>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product7} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Vegan Burger</Text>
                    <Text className="description">$26</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product8} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Fried Nuggets</Text>
                    <Text className="description">$16</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product9a} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Short Ribs</Text>
                    <Text className="description">$37</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product9b} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Burger Party Kit</Text>
                    <Text className="description">$26</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product10} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Fried Potatoes</Text>
                    <Text className="description">$16</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Product11} alt="blog" />
                  </div>
                  <div className="info-wrapper">
                    <Text className="title">Hot Dog Kit</Text>
                    <Text className="description">$37</Text>
                    <ButtonStyled1 size="middle">Buy now</ButtonStyled1>
                  </div>
                </Col>
              </Row>
            </div>
          </BlogsRecentlyWrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default Shop;
