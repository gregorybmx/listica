import React from 'react'
import Image from 'next/image'
import styles from '../styles/Equipo.module.css'
import MiembroEquipo from './MiembroEquipo'

const Equipo = () => {
    return (
        <div id={styles['body']} className=" w-100 justify-content-center">
            <h1 id={styles['titulo']} className="text-center fs-1 fw-bold">EQUIPO</h1>
            <h1 id={styles['titulo']} className="text-center fs-1 fw-bold">&quot;</h1>
            <div id="equipo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner m-auto justify-content-center">
                    <div className="carousel-item active">
                        <MiembroEquipo text='You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.'
                            image='/img/Equipo/dwayne.jpeg'
                            nombre= 'Dwayne Johnson'
                            puesto='FULL STACK'
                        />
                    </div>

                    <div className="carousel-item">
                        <MiembroEquipo text='You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.'
                            image='/img/Equipo/john.jpg'
                            nombre= 'John Cena'
                            puesto='DATABASE ADMINISTRATOR'
                        />
                    </div>

                    <div className="carousel-item">
                        <MiembroEquipo text='You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.'
                            image='/img/Equipo/hunter.png'
                            nombre= 'Paul Levesque'
                            puesto='FRONT-END DEVELOPER'
                        />
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