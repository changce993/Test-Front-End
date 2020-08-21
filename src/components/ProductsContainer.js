import React from 'react'
import styles from './Products.module.css'
import Product from './Product'

const ProductsContainer = ({ title, productsItems, cart,  setCart }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>

            <Product productsItems={productsItems} cart={cart} setCart={setCart} />
        </div>
    )
}

export default ProductsContainer
