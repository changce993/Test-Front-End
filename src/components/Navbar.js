import React from 'react'
import styles from './Navbar.module.css'

const Navbar = ({ cart }) => {
    return (
        <nav className={styles.navbar}>
            <div className="navbar-brand">
                <img src="images/logo.png" alt="logo corebiz"/>
            </div>


            <div className={styles.navbar_nav}>
                <div className={styles.search_bar_container}>
                    <input className={styles.search_bar} placeholder="O que está procurando?" />
                    <i className="fas fa-search"></i>
                </div>

                <div className={styles.user}>
                    <i className="fas fa-user"></i> <span>Minha Conta</span>
                </div>

                <div className={styles.cart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className={styles.counter_cart}>{cart.length}</span>
                </div>
            </div>
        </nav> 
    )
}

export default Navbar
