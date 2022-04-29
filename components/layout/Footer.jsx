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
                    <a target="_blank">
                        <img id={styles['redesFooter']} src='/img/Footer/fbLogo.png' alt='Logotipo'/>
                    </a>
                </Link>
                <Link href='https://www.instagram.com/listica.costarica/'>
                    <a target="_blank">
                        <img id={styles['redesFooter']} src='/img/Footer/instaLogo.png' alt='Logotipo'/>
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/company/listica/'>
                    <a target="_blank">
                        <img id={styles['redesFooter']} src='/img/Footer/linkedinLogo.png' alt='Logotipo'/>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Footer