import React from 'react'
import styles from '../../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div id={styles['footer']}>
            <div id={styles['logoWrap']}>
                <Image id={styles['logo']} src='/img/logo.png' alt='Logotipo' height='39px' width='150px'/>
            </div>
            <div id={styles['footerText']}>
                GUANACASTE, COSTA RICA
            </div>
            <div id={styles['redesContainer']}>
                <Link href='https://www.facebook.com/listica.costarica'>
                    <a target="_blank">
                        <div id={styles['redesWrap']}>
                            <Image id={styles['redesFooter']} src='/img/Footer/fbLogo.png' alt='Logotipo' height='40px' width='40px'/>
                        </div>
                    </a>
                </Link>
                <Link href='https://www.instagram.com/listica.costarica/'>
                    <a target="_blank">
                        <div id={styles['redesWrap']}>
                            <Image id={styles['redesFooter']} src='/img/Footer/instaLogo.png' alt='Logotipo' height='40px' width='40px'/>
                        </div>
                    </a>
                </Link>
                <Link href='https://www.linkedin.com/company/listica/'>
                    <a target="_blank">
                        <div id={styles['redesWrap']}>
                            <Image id={styles['redesFooter']} src='/img/Footer/linkedinLogo.png' alt='Logotipo' height='40px' width='40px'/>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Footer