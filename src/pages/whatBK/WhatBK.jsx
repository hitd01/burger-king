import React from 'react';
import Leftimage from '../../assets/images/left_img.png';
import Steak from '../../assets/images/steak.png';
import { Col, Row, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Tomato from '../../assets/images/tomato.png';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import {
  BannerWrapper,
  NewProductsWrapper,
  BlogsRecentlyWrapper,
  ButtonStyled,
} from './styles';
import { Footer, Header } from '../../components';
import useAuth from '../../hooks/useAuth';

const { Paragraph, Title, Text } = Typography;

const WhatBK = () => {
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
                <div className="home-about">
                  <Link to="/">Home</Link>
                  <Link to="/about"> / About us</Link>
                </div>
                <Title level={1} className="title">
                  About Us
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
          <NewProductsWrapper>
            <div className="container">
              <Row gutter={[16, 32]}>
                <Col xl={32} lg={32} md={48} sm={96} xs={96}>
                  <div className="product-image-wrapper">
                    <img src={Leftimage} alt="product" />
                  </div>
                  <div className="title-image">
                    <div>
                      <h1>SOMETHING ABOUT BURGOS</h1>
                    </div>
                    <div>
                      <Text>
                        Etiam blandit, orci id malesuada sollicitudin, felis
                        ligula ornare enim, ac consectetur dui nunc ut eros.
                        Quisque ut nunc ex. Mauris scelerisque lobortis urna, in
                        tempus urna hendrerit non.
                      </Text>
                    </div>
                    <br />
                    <div>
                      <Text>
                        Sed feugiat justo at laoreet convallis. Maecenas ac
                        aliquam turpis. Ut aliquet leo ut gravida auctor.
                      </Text>
                    </div>
                    <div className="title-logo">
                      <div className="logo">
                        <img src={Steak} alt="icon-logo" />
                      </div>
                      <div className="name-logo">
                        <h1>Always Fresh Products</h1>
                      </div>
                    </div>
                    <Link to="products">
                      <ButtonStyled size="middle">Xem thêm</ButtonStyled>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </NewProductsWrapper>
          <BlogsRecentlyWrapper>
            <div className="title-wrapper">
              <Title level={4}>PHOTO GALLERY</Title>
            </div>
            <div className="container">
              <Row gutter={[16, 32]}>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Tomato} alt="picture" />
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Tomato} alt="picture" />
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Tomato} alt="picture" />
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Tomato} alt="picture" />
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Tomato} alt="picture" />
                  </div>
                </Col>
                <Col xl={8} lg={8} md={12} sm={24} xs={24}>
                  <div className="blog-image-wrapper">
                    <img src={Tomato} alt="picture" />
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

export default WhatBK;
