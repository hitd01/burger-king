import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AddReviewWrapper,
  BannerWrapper,
  DescriptionWrapper,
  ProductInfo,
  RelatedProductsWrapper,
  ReviewWrapper,
} from './styles';
import {
  Col,
  Row,
  Typography,
  Image,
  Button,
  Avatar,
  Form,
  Input,
  Pagination,
} from 'antd';
import {
  EyeOutlined,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';

const { Text, Title, Paragraph } = Typography;

const Product = () => {
  const [form] = Form.useForm();
  const [quantity, setQuantity] = useState(1);
  const [rateStars, setRateStars] = useState(0);

  const { isLogged } = useSelector((state) => state.login);

  // handle add review
  const addReviewSubmit = () => {};

  // handle change rating
  const handleChangeRating = (newRating) => {
    setRateStars(newRating);
  };

  const countTest = [1, 2, 3, 4, 5, 6, 7, 8];
  const numEachPage = 4;
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
              <Text> / </Text>
              <Link to="/products">Thực đơn</Link>
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
            <Row gutter={[32, 32]}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Image
                  src="https://rayoflightthemes.com/htmltemplates/burgos_street_food_html5_template/burgos_html/images/product1b.png"
                  width="100%"
                />
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Title level={2}>Burger bò nướng whopper</Title>
                <div className="rate-wrapper">
                  <ReactStars
                    count={5}
                    size={25}
                    activeColor="#ffa27e"
                    value={4.5}
                    edit={false}
                  />
                  <Text>(1 đánh giá)</Text>
                </div>
                <Text>
                  {(115000).toLocaleString('vi-vn', {
                    style: 'currency',
                    currency: 'VND',
                  })}
                </Text>
                <div className="quantity-change-wrapper">
                  <div className="quantity-change">
                    <Text className="quantity">{quantity}</Text>
                    <div className="btn-wrapper">
                      <Button
                        type="default"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <PlusOutlined />
                      </Button>
                      <Button
                        type="default"
                        disabled={quantity === 1}
                        onClick={() => setQuantity(quantity - 1)}
                      >
                        <MinusOutlined />
                      </Button>
                    </div>
                  </div>
                  <div className="btn-add">
                    <Button type="primary">Thêm vào giỏ hàng</Button>
                  </div>
                </div>
                <Text>Phân loại: Burger</Text>
              </Col>
            </Row>
          </div>
        </div>
      </ProductInfo>

      <DescriptionWrapper>
        <div className="container">
          <Title level={4}>Mô tả</Title>
          <Text>
            Luôn được ưu chuộng dù bất kì ở chi nhánh hay cửa hàng nào đó là món
            Whopper trứ danh với các nguyên liệu hấp dẫn không thể chối từ như
            thịt nướng xém lửa thơm ngon mềm mại nhưng không kém phần bổ dưỡng,
            những lát cà chua và rau tươi ngon, và điều quan trọng làm nên món
            bánh hấp dẫn này đó chính là nước sốt mayonnaise và mustard hấp dẫn,
            không ở đâu có được. Ngoài món Whopper trứ danh đó ra thì bạn không
            thể bỏ lỡ Burger gà với miếng ức gà được chiên vàng giòn rụm ăn kèm
            với rau xà lách và cà chua tươi ngon, ăn rất quyện vị với hai lát
            bánh mềm mỏng, một món ăn nhanh tuyệt vời, vừa đáp ứng được hai tiêu
            chí vừa ngon vừa rẻ. Nếu bạn bỏ lỡ món bánh Burger Bò hấp dẫn tại
            Quick Food thì quả thật đó là một sai sót khá lớn. Không gì tuyệt
            vời hơn với những lát thịt nguội bacon giòn tan hòa quyện với lát
            phô mai Cheddar và thịt bò nướng lửa. Ngoài những món bánh burger đã
            làm nên tên tuổi của Quick Food đó ra thì bạn có thể thưởng thức các
            món ăn kèm như khoai tây chiên giòn, mực chiên vòng, gà miếng,..
          </Text>
        </div>
      </DescriptionWrapper>

      <ReviewWrapper>
        <div className="container">
          <Title level={4}>Đánh giá (1)</Title>
          <div className="review-wrapper">
            <Avatar size={60}>A</Avatar>
            <div className="review">
              <div className="top">
                <Text className="username">Username</Text>
                <Text className="time">09-04-2022</Text>
              </div>
              <ReactStars
                count={5}
                size={25}
                color2={'#ffa27e'}
                value={4.5}
                edit={false}
              />
              <div className="comments">
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium, saepe, quaerat odio soluta est voluptates quia
                  obcaecati suscipit nostrum incidunt praesentium rerum, itaque
                  labore iste. Hic, ratione explicabo! Voluptatum, voluptatibus?
                </Text>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium, saepe, quaerat odio soluta est voluptates quia
                  obcaecati suscipit nostrum incidunt praesentium rerum, itaque
                  labore iste. Hic, ratione explicabo! Voluptatum, voluptatibus?
                </Text>
              </div>
            </div>
          </div>
        </div>
      </ReviewWrapper>

      <AddReviewWrapper>
        <div className="container">
          <Title level={4}>Thêm đánh giá</Title>
          {isLogged ? (
            <Form
              form={form}
              onFinish={addReviewSubmit}
              name="add-review"
              className="add-review-form"
            >
              <Form.Item label="Đánh giá của bạn">
                <ReactStars
                  count={5}
                  size={25}
                  color2={'#ffa27e'}
                  value={rateStars}
                  onChange={handleChangeRating}
                />
              </Form.Item>
              <Form.Item
                name="review"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập trường này!',
                  },
                ]}
              >
                <Input placeholder="Nhận xét" size="large" />
              </Form.Item>
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="add-review-btn"
                >
                  Đánh giá
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Text className="require-login">
              Đăng nhập để thêm đánh giá của bạn
            </Text>
          )}
        </div>
      </AddReviewWrapper>

      <RelatedProductsWrapper>
        <div className="container">
          <Title level={4}>Món ngon liên quan</Title>
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
                        <Link to="/products/2" className="icon eye">
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
      </RelatedProductsWrapper>
    </>
  );
};

export default Product;
