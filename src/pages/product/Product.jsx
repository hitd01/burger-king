import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProductComponent } from '../../components';

const Product = () => {
  let { id } = useParams();
  useEffect(() => {
    document.title = 'Sản phẩm';
    window.scrollTo(0, 0);
  }, [id]);

  const { productLoading } = useSelector((state) => state.products);
  const { productReviewLoading } = useSelector((state) => state.productReviews);

  if (productLoading === 'pending' || productReviewLoading === 'pending') {
    return <Spin />;
  }

  return (
    <>
      <ProductComponent />
    </>
  );
};

export default Product;
