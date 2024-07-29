import React from "react";
import styles from './CartItem.module.css';

const CartItem = ({item}) => {

  const { title, quantity, total, price, id } = item;

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          {total}{' '}
          <span className={styles.itemprice}>({price}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
