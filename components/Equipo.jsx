import React from 'react'
import Image from 'next/image'
import styles from '../styles/Equipo.module.css'

const Equipo = () => {
    return (
        <div id={styles['body']}>
            <h1 id={styles['titulo']}>EQUIPO</h1>
            <h1 id={styles['titulo']}>&quot;</h1>
            <div id="equipo" className="carousel slide" data-bs-ride="carousel">
                <div id={styles['carousel']} className="carousel-inner">
                    <div className="carousel-item active">
                        <div id={styles['itemText']}>
                            You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.
                        </div>
                        <div id={styles['contenedorImagen']}>
                            <Image id={styles['image']} src="/img/Equipo/dwayne.jpeg" width={120} height={124} alt="Imgen Perfil Dwayne"/>
                        </div>
                        <div id={styles['nombreColaborador']}>Dwayne Johnson</div>
                        <div id={styles['puesto']}>FULL STACK</div>
                    </div>
                    <div className="carousel-item">
                    <div id={styles['itemText']}>
                            You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.
                        </div>
                        <div id={styles['contenedorImagen']}>
                            <Image id={styles['image']} src="/img/Equipo/john.jpg" width={120} height={124} alt="Imagen Perfil John"/>
                        </div>
                        <div id={styles['nombreColaborador']}>John Cena</div>
                        <div id={styles['puesto']}>DATABASE ADMINISTRATOR</div>
                    </div>
                    <div className="carousel-item">
                        <div id={styles['itemText']}>
                            You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.
                        </div>
                        <div id={styles['contenedorImagen']}>                      
                            <Image id={styles['image']} src="/img/Equipo/hunter.png" width={120} height={124} alt="Imagen Perfil Paul"/>
                        </div>
                        <div id={styles['nombreColaborador']}>pAUL Levezque</div>
                        <div id={styles['puesto']}>FRONT-END DEVELOPER</div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#equipo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#equipo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Equipo