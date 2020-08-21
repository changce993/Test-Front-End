import React from 'react'
import styles from './Products.module.css'

const ProductPrice = ({ price }) => {

    return (
        <p className={styles.price}>por R$ {price}</p>
    )
}

export default ProductPrice



