import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    fetchProducts,
    selectProduct,
    cartItems,
} from '../products/productSlice'
import styles from './Cart.module.css';
import { FaCheck } from 'react-icons/fa';

export function Cart() {
    const cartItems = useSelector(cartItems)
    const dispatch = useDispatch();
    const [cart, setCart] useState({
        "id": 12,
        "sku": 12064273040195392,
        "title": "Cat Tee Black T-Shirt",
        "description": "4 MSL",
        "availableSizes": ["S", "XS"],
        "style": "Black with custom print",
        "price": 10.9,
        "installments": 9,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true,
        "img": {
          "normal": "/assets/12064273040195392_1.jpg",
          "thumb": "/assets/12064273040195392_2.jpg"
        }
      },);
    const handleChange = (e) => setCart(e.target.value);
    function handleClick() {
        dispatch(add(product))
        setCart({});
    }

    return (
        <div className={styles.cartContainer}>
            {cart.map(item => (
                <li className={styles.cartItem}>
                    {item.title} ${item.price}
                </li>
                
            ))}
            
        </div>
    )
}


