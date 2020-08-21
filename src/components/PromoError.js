import React from 'react'
import styles from './Promotions.module.css'

const PromoError = ({ title }) => {
    return (
        <p className={styles.error}> {title} </p>
    )
}

export default PromoError
