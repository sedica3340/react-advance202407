import React from "react";
import styles from './CartButton.module.css';

const CartButton = () => {

  return (
    <button className={styles.button}>
      <span>My Cart</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default CartButton;
