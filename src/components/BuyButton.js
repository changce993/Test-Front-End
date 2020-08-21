import React from 'react'
import styles from './Products.module.css'

const BuyButton = ({ title, prod, cart, setCart }) => {

    const handleSetCart = () => {
        setCart([
            ...cart, prod
        ])

        console.log(cart)
    }

    return (
        <button onClick={handleSetCart} className={styles.buy_button}> {title} </button>
    )
}

export default BuyButton
