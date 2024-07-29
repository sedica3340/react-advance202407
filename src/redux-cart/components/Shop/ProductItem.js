import React from "react";
import Card from '../UI/Card';
import styles from './ProductItem.module.css';

const ProductItem = ({description, id, price, title}) => {

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>{price}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
