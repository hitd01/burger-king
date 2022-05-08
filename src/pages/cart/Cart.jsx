import React, { useEffect } from 'react';

const Cart = () => {
  useEffect(() => {
    document.title = 'Giỏ hàng';
    window.scrollTo(0, 0);
  }, []);

  return <div>Cart</div>;
};

export default Cart;
