import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div id={styles['footer']}>
            <div>
                <Image id={styles['logo']} src='/img/logo.png' alt='Logotipo' height='39px' width='150px'/>
            </div>
            <div id={styles['footerText']}>
                GUANACASTE, COSTA RICA
            </div>
            <div>
                <Link href='https://www.facebook.com/listica.costarica'>
                    <a target="_blank">
                        <Image id={styles['redesFooter']} src='/img/Footer/fbLogo.png' alt='Logotipo' height='40px' width='40px'/>
                    </a>
                </Link>
                <Link href='https://www.instagram.com/listica.costarica/'>
                    <a target="_blank">
                        <Image id={styles['redesFooter']} src='/img/Footer/instaLogo.png' alt='Logotipo' height='40px' width='40px'/>
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/company/listica/'>
                    <a target="_blank">
                        <Image id={styles['redesFooter']} src='/img/Footer/linkedinLogo.png' alt='Logotipo' height='40px' width='40px'/>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Footer