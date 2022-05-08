import React from 'react';
import { Link } from 'react-router-dom';
import { BannerWrapper } from './styles';
import { Typography } from 'antd';

const { Text, Title, Paragraph } = Typography;

const Blog = () => {
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
            <Paragraph className="content">
              Một bữa ăn đầy đủ chất dinh dưỡng cho bạn sức khỏe tốt, sự dẻo
              dai, và thân hình đúng chuẩn. Trong xã hội hiện đại, mọi thứ được
              tối giản đáng kể, và các món ăn cũng vậy.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>
    </>
  );
};

export default Blog;
