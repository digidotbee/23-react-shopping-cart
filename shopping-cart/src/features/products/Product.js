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

export function Product() {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  useEffect(() => {
    dispatch(fetchProducts())
  
    }, [])



  return (
    <ul className={styles.container}>
    {product.map((item) => (
      
      <li><div className={styles.card}><img src={item.img.normal}/><h1 className={styles.title}>{item.title}</h1></div></li>
    ))}
    </ul>
  );
}
