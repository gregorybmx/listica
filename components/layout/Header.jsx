/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
    return (
        <div id={styles['header']}>
            <nav id={styles['navbar']} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link href="#">
                        <a className="navbar-brand">
                            <img id={styles['headerLogo']} src='/img/logo.png' alt='Logotipo'/>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id={styles['navbarNav']}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a id={styles['navText']} className="nav-link active" aria-current="page" href="#">Carousel</a>
                            </li>
                            <li className="nav-item">
                            <a id={styles['navText']} className="nav-link active" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                            <a id={styles['navText']} className="nav-link active" href="#">Equipo</a>
                            </li>
                            <li className="nav-item">
                            <a id={styles['navText']} className="nav-link active" href="#">Contáctenos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header