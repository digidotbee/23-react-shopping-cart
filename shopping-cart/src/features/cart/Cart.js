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
import { FaCart } from 'react-icons/fa';