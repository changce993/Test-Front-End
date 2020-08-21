import React from 'react'
import Rating from './Rating'
import ProductName from './ProductName'
import ProductsImage from './ProductsImage'
import ProductPrice from './ProductPrice'
import BuyButton from './BuyButton'
import styles from './Products.module.css'

const Product = ({ productsItems, setCart, cart }) => {

    let price = productsItems.map(item => {
        var it = item.price.toString()
        var getInteger = it.slice(0, -2) // Get Main Number
        var getDecimal = it.slice(-2) // Get Float Number
        var formattedNumber = getInteger + '.' + getDecimal; // Merge both
        return formattedNumber
    })

    return (
        <div className={styles.product_container}>
            {productsItems.map(prod => {


                return<div className={styles.product_card} key={prod.productId}>
                    
                    <ProductsImage img={prod.imageUrl} />

                    <ProductName title={prod.productName} />

                    <Rating stars={prod.stars} key={prod.productId}/>

                    {prod.listPrice ? <p className={styles.list_price}>de R$ {prod.listPrice}</p> : <p className={styles.list_price_null}></p>}

                    <ProductPrice price={price[-1 + prod.productId]}/>

                    <BuyButton prod={prod} title={'Comprar'} cart={cart} setCart={setCart}/>
                </div> 
            })}
        </div>
    )
}

export default Product

