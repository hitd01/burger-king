import { Spin } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { Footer, Header, ProductComponent } from '../../components';

const Product = () => {
  const { loadingProduct } = useSelector((state) => state.products);

  if (loadingProduct === 'pending') {
    return <Spin />;
  }

  return (
    <>
      <ProductComponent />
      <Footer />
    </>
  );
};

export default Product;
