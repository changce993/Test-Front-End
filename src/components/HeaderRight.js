import React from 'react'
import styles from './Header.module.css'

const HeaderRight = () => {
    return (
        <div className={styles.container_right}>
            <img className={styles.waves} src="/images/wave.png" alt="wave"/>
        </div>
    )
}

export default HeaderRight