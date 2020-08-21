import React from 'react'
import styles from './Footer.module.css'

const Location = ({location}) => {
    return (
        <p className={styles.p}>
            {location}
        </p>
    )
}

export default Location
