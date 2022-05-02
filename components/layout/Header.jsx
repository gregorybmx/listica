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
                                <Link href='#Carousel'> 
                                    <a id={styles['navText']} className="nav-link active">Carousel</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href='#Servicios'> 
                                    <a id={styles['navText']} className="nav-link active">Servicios</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#Equipo"> 
                                    <a id={styles['navText']} className="nav-link active" >Equipo</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#Contactenos">
                                    <a id={styles['navText']} className="nav-link active">Contáctenos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header