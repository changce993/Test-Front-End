import React from 'react'
import styles from './Products.module.css'

const Rating = ({ stars }) => {
    return (                    
        <div className={styles.group_stars}>
            {[...Array(stars)].map(star => {
                return <i className={`fas fa-star ${styles.star}`}></i>
            })}

            {[...Array(5 - stars)].map(star => {
                return <i className={`far fa-star ${styles.empty_star}`}></i>
            })}
        </div>
    )
}

export default Rating
