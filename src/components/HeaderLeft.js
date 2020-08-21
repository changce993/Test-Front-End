import React from 'react'
import styles from './Header.module.css'

const HeaderLeft = () => {
    return (
        <div className={styles.container_left}>
            <p className={styles.first_line} >Olá, o que você está buscando?</p>
            <h2 className={styles.second_line} >Criar ou migrar seu e-commerce?</h2>
        </div>
    )
}

export default HeaderLeft
