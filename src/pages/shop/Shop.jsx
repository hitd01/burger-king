import React, { useEffect, useState } from 'react';
import { Col, Menu, Pagination, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';
import { BannerWrapper, ContainerWrapper } from './styles';
import {
  EyeOutlined,
  FilterOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ReactStars from 'react-rating-stars-component';

const { Paragraph, Title, Text } = Typography;

const Shop = () => {
  useEffect(() => {
    document.title = 'Thực đơn';
    window.scrollTo(0, 0);
  }, []);

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
    getMenuItem('Gà rán', 'fried-chicken'),
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

  const countTest = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const numEachPage = 8;
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(numEachPage);
  const handlePaginationChange = (current) => {
    setMin((current - 1) * numEachPage);
    setMax(current * numEachPage);
  };

  return (
    <>
      <BannerWrapper>
        <div className="banner">
          <div className="content-wrapper">
            <div className="navigate">
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
            {countTest.length > 0 &&
              countTest.slice(min, max).map((item) => (
                <Col key={item} xl={6} lg={8} md={12} sm={24} xs={24}>
                  <Image
                    src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/product1b.png"
                    width="100%"
                    height="300px"
                  />
                  <div className="info-wrapper">
                    <div className="info">
                      <Text>Burger bò nướng whopper</Text>
                      <Text>
                        {(115000).toLocaleString('vi-vn', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </Text>
                    </div>
                    <div className="footer">
                      <ReactStars
                        count={5}
                        size={25}
                        activeColor="#ffa27e"
                        value={4.5}
                        edit={false}
                      />
                      <div className="icon-wrapper">
                        <div className="icon shopping-cart">
                          <ShoppingCartOutlined />
                        </div>
                        <Link to="1" className="icon eye">
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
            <Pagination
              pageSize={numEachPage}
              defaultCurrent={1}
              total={countTest.length}
              onChange={handlePaginationChange}
            />
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Shop;
