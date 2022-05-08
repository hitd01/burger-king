import React from 'react';
import { Link } from 'react-router-dom';
import {
  AddReviewWrapper,
  BannerWrapper,
  PostContentWrapper,
  ReviewWrapper,
} from './styles';
import { Avatar, Button, Form, Image, Input, Menu, Typography } from 'antd';
import { CalendarOutlined, FolderOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { Text, Title } = Typography;

const Blog = () => {
  const [form] = Form.useForm();

  const { isLogged } = useSelector((state) => state.login);

  const metaListItems = [
    {
      label: <Link to="/blogs/time_group_id">09-07-2021</Link>,
      key: 'time',
      icon: <CalendarOutlined />,
    },
    {
      label: <Link to="/blogs/category_id">Bộ sưu tập Burger</Link>,
      key: 'category',
      icon: <FolderOutlined />,
    },
  ];

  const contentsTest = [
    'Một chiếc burger tôm truyền thống đã làm những người thưởng thức nó nao lòng. Vậy còn gì tuyệt hơn khi có sự kết hợp hai tầng tôm trong cùng một chiếc bánh. Khám phá ngay chiếc burger tôm hai tầng qua bài viết sau để giúp bạn có thêm lựa chọn thú vị trong mỗi bữa ăn của mình nào.',
    'Burger tôm hai tầng có nguyên liệu chính là những con tôm nõn, thêm vào đó là những lá rau sống tươi mát, vỏ bánh mì mềm, thơm, lớp sốt sánh quyện. Bạn sẽ không khỏi bất ngờ ngay từ khi thưởng thức miếng bánh đầu tiên đâu đấy. Lần lượt từ lớp bánh mịn bao bọc bên ngoài, cho đến những con tôm giòn rụm ở lớp nhân và hương thơm, vị bùi của lớp rau xà lách được sắp xếp đan xen.',
    'Sự kết hợp ăn ý, hòa nhập, làm nên món bánh burger bổ ích, hấp dẫn. Người dùng sẽ không phải lo sự ngấy mỡ như một số món ăn khác, mà đối với chiếc burger này thì những lớp tôm thật sự rất giòn bởi được chiên theo cách thức rất riêng, đặc biệt.',
  ];
  const imagesTest = [
    'https://chianui.vn/wp-content/uploads/2019/08/hamburger-ga-2-tang-compressed.jpg',
    'https://chianui.vn/wp-content/uploads/2019/03/burger-tom-hai-tang-.png',
  ];

  // handle add review
  const addReviewSubmit = () => {};

  return (
    <>
      <BannerWrapper>
        <div className="banner">
          <div className="content-wrapper">
            <div className="navigate">
              <Link to="/">Trang chủ</Link>
              <Text> / </Text>
              <Link to="/blogs">Bài viết</Link>
              <Text> / Chi tiết bài viết</Text>
            </div>
            <Title level={1} className="title">
              Chi tiết bài viết
            </Title>
            {/* <Paragraph className="content">
              Một bữa ăn đầy đủ chất dinh dưỡng cho bạn sức khỏe tốt, sự dẻo
              dai, và thân hình đúng chuẩn. Trong xã hội hiện đại, mọi thứ được
              tối giản đáng kể, và các món ăn cũng vậy.
            </Paragraph> */}
            <Menu items={metaListItems} />
          </div>
        </div>
      </BannerWrapper>

      <PostContentWrapper>
        <div className="container">
          {contentsTest.length < 3
            ? contentsTest.map((paragraph, index) => (
                <Text key={index}>{paragraph}</Text>
              ))
            : contentsTest
                .slice(0, 2)
                .map((paragraph, index) => (
                  <Text key={index}>{paragraph}</Text>
                ))}
          <div className="images-wrapper">
            {imagesTest.map((image, index) => (
              <Image key={index} src={image} />
            ))}
          </div>
          {contentsTest.length > 0 &&
            contentsTest
              .slice(2, contentsTest.length)
              .map((paragraph, index) => <Text key={index}>{paragraph}</Text>)}
        </div>
      </PostContentWrapper>

      <ReviewWrapper>
        <div className="container">
          <Title level={4}>Nhận xét (1)</Title>
          <div className="review-wrapper">
            <Avatar size={60}>A</Avatar>
            <div className="review">
              <div className="top">
                <Text className="username">Username</Text>
                <Text className="time">09-04-2022</Text>
              </div>
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
          <Title level={4}>Thêm nhận xét</Title>
          {isLogged ? (
            <Form
              form={form}
              onFinish={addReviewSubmit}
              name="add-review"
              className="add-review-form"
            >
              <Form.Item
                name="review"
                label="Nhận xét của bạn"
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
                  Nhận xét
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Text className="require-login">
              Đăng nhập để thêm nhận xét của bạn
            </Text>
          )}
        </div>
      </AddReviewWrapper>
    </>
  );
};

export default Blog;
