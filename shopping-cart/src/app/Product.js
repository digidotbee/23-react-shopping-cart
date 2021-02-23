import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch("http://localhost:3001/products")
        .then((resp) => resp.json())
        .then((data) => {
          console.log("data", data)
          setProducts(data)
        })
    }, [])

    return (
    <div className="product-container">
        
    </div>
    )
}


