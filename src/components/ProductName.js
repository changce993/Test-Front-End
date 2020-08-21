import React from 'react'
import styles from './Products.module.css'

const ProductName = ({ title }) => {
    return (
        <p className={styles.product_name}>{title}</p>
    )
}

export default ProductName
