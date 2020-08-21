import React from 'react'
import styles from './Header.module.css'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {

    return (
        <header className={styles.header}>
            <HeaderLeft />
            <HeaderRight />
        </header>
    )
}

export default Header
    