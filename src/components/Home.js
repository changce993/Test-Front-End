import React from 'react'
import Header from './Header'
import ProductsContainer from './ProductsContainer'
import Promotions from './Promotions'

const Home = ({ productsItems, setCart, cart }) => {

    const title = 'Mais Vendidos'
    const promotionText = 'Participe de nossas news com promoções e novidades!'

    return (<>
        <Header />
        <ProductsContainer title={title} productsItems={productsItems} cart={cart} setCart={setCart}/>
        <Promotions promotionText={promotionText}/>
    </>
    )
}

export default Home
