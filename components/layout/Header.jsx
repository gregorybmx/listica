import React from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div id={styles['header']}>
            <nav id={styles['navbar']} className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link href="#">
                        <a className="navbar-brand">
                            <Image id='logo' src='/img/logo.png' alt='Logotipo' height="39px" width="150px"/>
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