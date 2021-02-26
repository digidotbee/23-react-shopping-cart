import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    // fetchProducts,
    selectProduct,
    selectTotal,
    selectTotalPrice,
    cartItems,
    removeFromCart,
    selectCart
} from '../products/productSlice'
import styles from './Cart.module.css';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

export default function Cart() {
    const cart = useSelector(cartItems)
    const dispatch = useDispatch();
    const [cartVisibility, setCartVisibility] = useState(false);

    console.log(cart)

    return (
        <aside>
            <div className={styles.sidenav}
            id={styles.mySideNav}
            style={{ width: cartVisibility ? "400px" : "0" }}>
                <a
                href="#"
                class={styles.closeBtn}
                onClick={() => setCartVisibility(false)}
                >&times;
                </a>
                <div className={styles.cartTop}>
                <FaShoppingCart /> Cart
                <span>Total:</span>
                </div>              
            </div>
            <div className={styles.cartlist}>
                <ul>
                    {cart.map((item) => (
                    <div className={styles.cartItem}>
                    <img src={item.img.thumb} alt={item.title} />
                    <span>{item.availableSizes[0]} | {item.style}
                    {item.title} ${item.price.toFixed(2)}Quantity:1</span>
                    <button onClick={() => dispatch(removeFromCart(item))}>
                    <FaTimes />
                    </button>
                    </div>
                    ))}
                </ul>
            </div>
        </aside>
    )
}


