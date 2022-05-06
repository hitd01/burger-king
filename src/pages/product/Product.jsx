import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductComponent } from '../../components';

const Product = () => {
  useEffect(() => {
    document.title = 'Sản phẩm';
  });

  const { productLoading } = useSelector((state) => state.products);

  if (productLoading === 'pending') {
    return <Spin />;
  }

  return (
    <>
      <ProductComponent />
    </>
  );
};

export default Product;
