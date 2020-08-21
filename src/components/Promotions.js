import React, { useState, useRef } from 'react'
import PromoError from './PromoError'
import styles from './Promotions.module.css'

const Promotions = ({ promotionText }) => {

    const [errorName , setErrorName] = useState(false);
    const [errorEmail , setErrorEmail] = useState(false);

    const inputName = useRef()
    const inputEmail = useRef()

    const handleSubmit = e => {
        e.preventDefault()

        if(inputName.current.value === ''){
            inputName.current.style.border = '1px solid var(--color-red)'
            setErrorName(true)
        } else {
            inputName.current.style.border = 'none'
            setErrorName(false)
        }

        if(inputEmail.current.value === ''){
            inputEmail.current.style.border = '1px solid var(--color-red)'
            setErrorEmail(true)
        } else {
            inputEmail.current.style.border = 'none'
            setErrorEmail(false)
        }

        
        
    }
    
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{promotionText}</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.input_component}>
                    <input ref={inputName} className={styles.input} name="name" type="text" placeholder="Digite seu nome" />
                    {errorName ? <PromoError title='Preencha com seu nome completo' /> : null}
                </div>

                <div className={styles.input_component}>
                    <input ref={inputEmail} className={styles.input} name="email" type="email" placeholder="Digite seu email" />
                    {errorEmail ? <PromoError title='Preencha com um e-mail válido'/> : null}
                </div>
                
                <button type='submit' className={styles.button}>Eu quero!</button>
            </form>
        </div>
    )
}

export default Promotions
