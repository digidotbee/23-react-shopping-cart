import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  selectProduct,
  addCartItem,
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // selectCount,
} from './productSlice';
import styles from './Product.module.css';
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

      const getWholeAndDecimal = value => {
      const guardNaN = value => isFinite(value) ? value : 0;
      const [whole, decimal] = String(value).split('.');
      return [Number(guardNaN(whole)), Number(guardNaN(decimal))];
    }

    console.log(getWholeAndDecimal(13.37))

  return (
    <ul className={styles.cardContainer}>
    {product.map((item) => (
      
      <li key={item.id} className={styles.card}>
          <div className={styles.shipping}>Free Shipping</div>
          <img src={item.img.normal}/>
          <span className={styles.title}>{item.title}</span>
          <div>
            <span>
              <h3>${getWholeAndDecimal((item.price))[0]}</h3>
              .<p>{getWholeAndDecimal((item.price).toFixed(2))[1]}</p>
            </span>
          </div>
          <h6 className={styles.bulkprice}>or {item.installments} x {installmentPrice(item.price, item.installments)}</h6>
          <button className={styles.button} onClick={() => dispatch(addCartItem(product))}>Add to Cart</button>
      </li>
    ))}
    </ul>
  );
}
