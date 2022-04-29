/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
    return (
        <div id={styles['footer']}>
            <div>
                <img id={styles['logo']} src='/img/logo.png' alt='Logotipo'/>
            </div>
            <div id={styles['footerText']}>
                GUANACASTE, COSTA RICA
            </div>
            <div>
                <Link href='https://www.facebook.com/listica.costarica'>
                    <img id={styles['redesFooter']} src='/img/Footer/fbLogo.png' alt='Logotipo'/>
                </Link>
                <Link href='https://www.instagram.com/listica.costarica/'>
                    <img id={styles['redesFooter']} src='/img/Footer/instaLogo.png' alt='Logotipo'/>
                </Link>
                <Link href='https://www.linkedin.com/company/listica/'>
                    <img id={styles['redesFooter']} src='/img/Footer/linkedinLogo.png' alt='Logotipo'/>
                </Link>
            </div>
        </div>
    )
}

export default Footer