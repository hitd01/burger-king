import React, { useEffect } from 'react';

const Cart = () => {
  useEffect(() => {
    document.title = 'Giỏ hàng';
  }, []);

  return <div>Cart</div>;
};

export default Cart;
