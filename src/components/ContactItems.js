import React from 'react'
import styles from './Footer.module.css'

const ContactItems = ({ title, icon }) => {
    return (
        <div className={styles.contact_item}><i className={icon + ' ' + styles.icon}></i>{title}</div>
    )
}

export default ContactItems
