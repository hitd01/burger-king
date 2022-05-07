import { PlusOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import React, { useState } from 'react';
import { Wrapper } from './styles';
import {
  ProductAdmin,
  AddProductAdmin,
  EditProductAdmin,
} from '../../admin_components';

const { Title } = Typography;

const Products = () => {
  const [selected, setSelected] = useState('products');

  const addProductButtonClick = () => {
    setSelected('add-product');
  };

  return (
    <Wrapper>
      {selected === 'products' ? (
        <>
          <div className="top-title">
            <Title level={4}>Danh sách món ăn</Title>
            <Button type="primary" size="large" onClick={addProductButtonClick}>
              <PlusOutlined />
              Thêm
            </Button>
          </div>
          <ProductAdmin />
        </>
      ) : null}
      {selected === 'add-product' ? <AddProductAdmin /> : null}
      {selected === 'edit-product' ? <EditProductAdmin /> : null}
    </Wrapper>
  );
};

export default Products;
