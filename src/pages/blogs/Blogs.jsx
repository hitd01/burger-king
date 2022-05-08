import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BannerWrapper, BlogListWrapper } from './styles';
import { Typography, Image, Row, Col, Pagination } from 'antd';

const { Text, Title, Paragraph } = Typography;

const Blogs = () => {
  useEffect(() => {
    document.title = 'Bài viết';
  }, []);

  const countTest = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
            <div className="home-shop">
              <Link to="/">Trang chủ</Link>
              <Text> / Bài viết</Text>
            </div>
            <Title level={1} className="title">
              Bài viết
            </Title>
            <Paragraph className="content">
              Chia sẻ kiến thức về các món ngon của chúng tôi. Những bài viết sẽ
              giúp bạn hiểu rõ nhất các món chúng tôi gửi tới bạn.
            </Paragraph>
          </div>
        </div>
      </BannerWrapper>

      <BlogListWrapper>
        <div className="container">
          <Row>
            {countTest.length > 0 &&
              countTest.slice(min, max).map((item) => (
                <Col key={item} span={24}>
                  <Image
                    src="https://chianui.vn/wp-content/uploads/2019/03/burger-tom-hai-tang-.png"
                    width={'100%'}
                  />
                  <div className="category_time_wrapper">
                    <Link to="blog_category">Burger</Link>
                    <Text> / </Text>
                    <Link to="blog_group-time">09-07-2021</Link>
                  </div>
                  <Link to="blog_id" className="title">
                    Sức lôi cuốn không thể chối từ của burger tôm hai tầng cho
                    người thưởng thức
                  </Link>
                  <Text className="content_slice">
                    Một chiếc burger tôm truyền thống đã làm những người thưởng
                    thức nó nao lòng. Vậy còn gì tuyệt hơn khi có sự kết hợp hai
                    tầng tôm trong cùng một chiếc bánh. Khám phá ngay chiếc
                    burger tôm hai tầng qua bài viết sau để giúp bạn có thêm lựa
                    chọn thú vị trong mỗi bữa ăn của mình nào.
                  </Text>
                  <Link to="blog_id" className="read_more">
                    Xem thêm
                  </Link>
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
      </BlogListWrapper>
    </>
  );
};

export default Blogs;
