import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectProduct
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // selectCount,
} from './productSlice';
import styles from './Product.module.css';
import ButtonAddtoCart from './ButtonAddtoCart'
import { FaShoppingCart } from 'react-icons/fa';

export function Product() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');


  useEffect(() => {
    dispatch(fetchProducts())
  
    }, [])

      function installmentPrice(priceNum, installNum){
      return (priceNum/installNum).toFixed(2)
    }

  return (
    <ul className={styles.container}>
    <FaShoppingCart className={styles.cart}/>
    {product.map((item) => (
      
      <li>
        <div className={styles.card}>
          <img src={item.img.normal}/>
          <h5 className={styles.title}>{item.title}</h5>
          <h5>${(item.price).toFixed(2)}</h5>
          <h6 className={styles.bulkprice}>or {item.installments} x {installmentPrice(item.price, item.installments)}</h6>
          </div>
          <ButtonAddtoCart className={styles.button} />
        </li>
    ))}
    </ul>
  );
}
