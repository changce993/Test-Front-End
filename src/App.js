import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

function App() {

  let initialCart = JSON.parse(localStorage.getItem('cart'))
  
  if(!initialCart){
    initialCart = []
  }

  const [ productsItems, setproductsItems ] = useState([])
  const [cart, setCart] = useState(initialCart)

  useEffect( () => {
    if(initialCart){
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }, [cart, initialCart])

  useEffect(()=>{
    const url = 'https://corebiz-test.herokuapp.com/api/v1/products'

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(result => {
      setproductsItems(result)
    })
  }, [])

  return (<div className="contenedor">
    <Navbar cart={cart} />
    <Home productsItems={productsItems} cart={cart} setCart={setCart} />
    <Footer />
  </div>
  );
}

export default App;
