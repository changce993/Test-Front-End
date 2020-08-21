import React from 'react'
import styles from './Products.module.css'

const ProductsImage = ({ img }) => {
    return (
        <img className={styles.product_image} src={img} alt="foto producto"/>
    )
}

export default ProductsImage
