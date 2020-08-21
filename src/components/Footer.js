import React from 'react'
import Location from './Location'
import ContactItems from './ContactItems'
import styles from './Footer.module.css'

const Footer = () => {
    const location = [
        {title: 'Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP'},
        {title: 'brasil@corebiz.ag'},
        {title: '+55 11 3090 1039'}
    ]

    const contact = [
        {title: 'Entre em contato', icon:'fas fa-envelope'},
        {title: 'FALE COM O NOSSO CONSULTOR ONLINE', icon:'fas fa-headset'}
    ]

    return (
        <div className={styles.container}>

            <div className={styles.location}>
                <h2>Localizaçāo</h2>

                {location.map(locate => {
                    return <Location key={locate.title} location={locate.title}/>
                })}
            </div>


            <div className={styles.contact}>
                {contact.map(contact => {
                    return <ContactItems key={contact.icon} title={contact.title} icon={contact.icon} />
                })}
            </div>


            <div className={styles.by}>
                <div className={styles.created}>
                    <p>Created by</p>
                    <img src="/images/corebiz.png" alt="created by corebiz" />
                </div>

                <div className={styles.powered}>
                    <p>Powered by</p>
                    <img src="/images/vtex.png" alt="powered by vtex" />
                </div>
            </div>

        </div>
    )
}

export default Footer


