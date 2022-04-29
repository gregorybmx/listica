/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Equipo.module.css'

const Equipo = ({name}) => {
    return (
        <div id={styles['Contenido']}>
            <h1 id={styles['titulo']}>EQUIPO</h1>
            
                <div id={`${name}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div>
                                <p id={styles['textItem']}>You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.</p>
                                <img id={styles['EquipoImagen']} src="/img/Equipo/dwayne.jpeg" className="d-block" alt="..."/>
                                <p id={styles['nombreColaborador']}>Dwayne Johnson </p>
                                <p id={styles['puesto']}>FULL STACK</p>
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <p id={styles['textItem']}>You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.</p>
                                <img id={styles['EquipoImagen']} src="/img/Equipo/john.jpg" className="d-block" alt="..."/>
                                <p id={styles['nombreColaborador']}>John Cena </p>
                                <p id={styles['puesto']}>DATABASE ADMINISTRATOR</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div>
                                <p id={styles['textItem']}>You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.</p>
                                <img id={styles['EquipoImagen']} src="/img/Equipo/hunter.png" className="d-block" alt="..."/>
                                <p id={styles['nombreColaborador']}>Paul Levesque </p>
                                <p id={styles['puesto']}>FRONT END DEVELOPER</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${name}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${name}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            
        </div>
    )
}

export default Equipo