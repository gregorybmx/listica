/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from '../styles/Carousel.module.css'

const Carousel = ({name}) => {
    return (
        <div id={`${name}`} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target={`#${name}`} data-bs-slide-to="4" aria-label="Slide 4"></button>
                
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img id={styles['imagenCarrousel']} src="/img/Carousel/Carousel1.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img id={styles['imagenCarrousel']} src="/img/Carousel/Carousel2.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img id={styles['imagenCarrousel']} src="/img/Carousel/Carousel3.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img id={styles['imagenCarrousel']} src="/img/Carousel/Carousel4.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img id={styles['imagenCarrousel']} src="/img/Carousel/Carousel5.png" className="d-block w-100" alt="..."/>
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
    )
}

export default Carousel