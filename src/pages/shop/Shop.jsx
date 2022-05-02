import React, { useState } from 'react';
import { Footer, Header } from '../../components';
import { Col, Menu, Pagination, Row, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { BannerWrapper, ContainerWrapper } from './styles';
import useAuth from '../../hooks/useAuth';
import {
  EyeOutlined,
  FilterOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';

const { Paragraph, Title, Text } = Typography;

const Shop = () => {
  const { isLoading } = useAuth();

  const getMenuItem = (label, key, icon, children, type) => {
    return {
      label,
      key,
      icon,
      children,
      type,
    };
  };
  const [categoryItems, setCategoryItems] = useState([
    getMenuItem('Tất cả', 'all'),
    getMenuItem('Combo', 'combo'),
    getMenuItem('Burger', 'burger'),
    getMenuItem('Pizza', 'pizza'),
    getMenuItem('Khoai chiên', 'french-fries'),
  ]);
  const sortItems = [
    getMenuItem('Sắp xếp', 'sub', <FilterOutlined />, [
      getMenuItem('Mặc định', '1'),
      getMenuItem('Đánh giá giảm dần', '2'),
      getMenuItem('Đánh giá tăng dần', '3'),
      getMenuItem('Giá giảm dần', '4'),
      getMenuItem('Giá tăng dần', '5'),
    ]),
  ];

  const countTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <BannerWrapper>
        <Header />
        <div className="banner">
          <div className="content-wrapper">
            <div className="home-shop">
              <Link to="/">Trang chủ</Link>
              <Text> / Thực đơn</Text>
            </div>
            <Title level={1} className="title">
              Thực đơn của chúng tôi
            </Title>
            <Paragraph className="content">
              Đồ ăn nhanh rẻ và ngon. Thực đơn đa dạng với những suất ăn lớn và
              sắp đồ rất đầy đủ, đặc biệt là phô mai.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <ContainerWrapper>
        <div className="container">
          <div className="filter-wrapper">
            <Menu
              mode="horizontal"
              items={categoryItems}
              defaultSelectedKeys={['all']}
              className="category-menu"
            />
            <Menu
              mode="inline"
              items={sortItems}
              defaultSelectedKeys={['1']}
              onClick={(e) => console.log(e)}
              className="sort-menu"
            />
          </div>

          <Row gutter={[16, 32]}>
            {countTest.map((item) => (
              <Col key={item} xl={6} lg={8} md={12} sm={24} xs={24}>
                <div className="product-image-wrapper">
                  <img
                    src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/product1b.png"
                    alt="product"
                  />
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
                      <Link to="/products/id" className="icon eye">
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

          <div className="pagination">
            <Pagination pageSize={9} defaultCurrent={1} total={50} />
          </div>
        </div>
      </ContainerWrapper>

      <Footer />
    </>
  );
};

export default Shop;
