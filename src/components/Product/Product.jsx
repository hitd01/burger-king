import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { BannerWrapper, ProductInfo } from './styles';
import { Col, Row, Typography, Image } from 'antd';

const { Text, Title, Paragraph } = Typography;

const Product = () => {
  return (
    <>
      <BannerWrapper>
        <Header />
        <div className="banner">
          <div className="content-wrapper">
            <div className="home-shop">
              <Link to="/">Trang chủ</Link>
              <Link to="/"> / Thực đơn</Link>
              <Text> / Chi tiết sản phẩm</Text>
            </div>
            <Title level={1} className="title">
              Chi tiết sản phẩm
            </Title>
            <Paragraph className="content">
              Một bữa ăn đầy đủ chất dinh dưỡng cho bạn sức khỏe tốt, sự dẻo
              dai, và thân hình đúng chuẩn. Trong xã hội hiện đại, mọi thứ được
              tối giản đáng kể, và các món ăn cũng vậy.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <ProductInfo>
        <div className="container">
          <div className="top-info">
            <Row gutter={[16, 16]}>
              <Col xl={12} lg={12} md={12} sm={24} xs={12}>
                <Image
                  src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/product1b.png"
                  width="100%"
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={12}></Col>
            </Row>
          </div>
        </div>
      </ProductInfo>
    </>
  );
};

export default Product;
