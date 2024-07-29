import React from "react";
import Card from '../UI/Card';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {

  const cartItem = {
    title: 'aircon',
    quantity:3,
    total: 10000,
    price: 5000,
    id: '1'
  };
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem item={cartItem}/>
      </ul>
    </Card>
  );
};

export default Cart;
